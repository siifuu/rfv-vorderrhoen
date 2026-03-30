const EMBED_PATTERN = /!\[\[([^\]]+)\]\]/g;
const IMAGE_EXTENSION_PATTERN =
    /\.(avif|gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i;

function createTextNode(value) {
    return { type: "text", value };
}

function createImageNode(rawTarget) {
    const [urlPart, ...optionParts] = rawTarget.split("|");
    const url = urlPart?.trim();

    if (!url || !IMAGE_EXTENSION_PATTERN.test(url)) {
        return null;
    }

    let alt = "";
    let width;
    let height;

    for (const option of optionParts.map((part) => part.trim()).filter(Boolean)) {
        if (/^\d+$/.test(option)) {
            width = Number(option);
            continue;
        }

        const sizeMatch = option.match(/^(\d+)x(\d+)$/i);

        if (sizeMatch) {
            width = Number(sizeMatch[1]);
            height = Number(sizeMatch[2]);
            continue;
        }

        if (!alt) {
            alt = option;
        }
    }

    const hProperties = {
        loading: "lazy",
        decoding: "async",
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
    };

    return {
        type: "image",
        url,
        alt,
        data: {
            hProperties,
        },
    };
}

function replaceEmbedsInTextNode(node) {
    if (node.type !== "text" || !node.value.includes("![[")) {
        return null;
    }

    const segments = [];
    let lastIndex = 0;

    for (const match of node.value.matchAll(EMBED_PATTERN)) {
        const matchIndex = match.index ?? 0;

        if (matchIndex > lastIndex) {
            segments.push(createTextNode(node.value.slice(lastIndex, matchIndex)));
        }

        const imageNode = createImageNode(match[1]);
        segments.push(imageNode ?? createTextNode(match[0]));
        lastIndex = matchIndex + match[0].length;
    }

    if (lastIndex === 0) {
        return null;
    }

    if (lastIndex < node.value.length) {
        segments.push(createTextNode(node.value.slice(lastIndex)));
    }

    return segments.filter((segment) => segment.type !== "text" || segment.value);
}

function transformChildren(node) {
    if (!node || !Array.isArray(node.children)) {
        return;
    }

    const nextChildren = [];

    for (const child of node.children) {
        const replacedChildren = replaceEmbedsInTextNode(child);

        if (replacedChildren) {
            nextChildren.push(...replacedChildren);
            continue;
        }

        transformChildren(child);
        nextChildren.push(child);
    }

    node.children = nextChildren;
}

export default function remarkObsidianImageEmbeds() {
    return (tree) => {
        transformChildren(tree);
    };
}
