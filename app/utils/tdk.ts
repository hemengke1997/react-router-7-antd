import { type MetaDescriptor } from 'react-router'

export function tdk({ t, d, k }: { t?: string; d?: string; k?: string }): MetaDescriptor[] {
  return [
    {
      title: t,
    },
    {
      name: 'description',
      content: d,
    },
    {
      name: 'keywords',
      content: k,
    },
  ]
}
