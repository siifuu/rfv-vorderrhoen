import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { buildCalendarFile } from "@/lib/calendar";

export async function getStaticPaths() {
    const entries = await getCollection(
        "news",
        ({ data }) => !data.draft && data.isEvent,
    );

    return entries.map((entry) => ({
        params: { slug: entry.slug },
        props: { entry },
    }));
}

export const GET: APIRoute = async ({ props, site }) => {
    const entry = props.entry as CollectionEntry<"news">;
    const body = buildCalendarFile(entry, site);

    return new Response(body, {
        headers: {
            "Content-Type": "text/calendar; charset=utf-8",
            "Content-Disposition": `inline; filename="${entry.slug}.ics"`,
        },
    });
};
