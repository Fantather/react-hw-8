export const TABS = [
  {
    id: 'tab1',
    title: 'Вкладка один',
    content: 'Текст во вкладке один'
  },
  {
    id: 'tab2',
    title: 'Вкладка два',
    content: 'Текст во вкладке два'
  },
  {
    id: 'tab3',
    title: 'Вкладка три',
    content: 'Текст во вкладке три'
  }
];

export function getTabs()
{
    return Object.values(TABS);
}