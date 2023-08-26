import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getAllPublished = async (locale: string) => {
  const projects = await notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID ?? '',
      filter: {
        property: 'published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
    })
    .then((res) => {
      const allProjects = res?.results?.map((item: any) => {
        return {
          id: item?.id,
          title:
            locale === 'pt'
              ? item?.properties?.title_pt?.title[0].plain_text
              : item?.properties?.title_en?.rich_text[0].plain_text,
          description:
            locale === 'pt'
              ? item?.properties?.description_pt?.rich_text[0].plain_text
              : item?.properties?.description_en?.rich_text[0].plain_text,
          tags: getTags(item?.properties?.tags?.multi_select),
          date: item?.properties.date?.date?.start,
          image: item?.properties?.image?.rich_text[0].plain_text,
          link: item?.properties.link?.url,
          github: item?.properties.github?.url,
        }
      })
      return allProjects
    })
    .catch(() => {
      return []
    })

  return projects
}

export function getTags(tags: Array<Record<string, string>>) {
  const allTags = tags?.map((tag: Record<string, string>) => {
    return tag?.name
  })

  return allTags
}
