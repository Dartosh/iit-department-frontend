type TagType = {
  id: number;

  type?: string;
  
  name: string;
}

export type TagsInputPropsType = {
  tags: TagType[],
  // TODO type tagsHandler
  tagsHandler: (...e: any) => any,
  onButtonClick: () => any,
}
