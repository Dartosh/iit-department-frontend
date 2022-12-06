type TagType = {
  key: string | number;
  
  value: string;
}

export type TagsInputPropsType = {
  tags: string[],
  // TODO type tagsHandler
  tagsHandler: (...e: any) => any,
}
