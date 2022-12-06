import React from "react"

import './TagsInput.css'

import { TagsInputPropsType } from "./types/TagsInputPropsType"

function TagsInput(props: TagsInputPropsType){
    const handleKeyDown = (e: any) => {
        if (e.key !== 'Enter') {
          return;
        }
    
        const value = e.target.value
    
        if (!value.trim()) {
          return;
        }
        // Add the value to the tags array
        props.tagsHandler((old: string[]) => {
            console.log('old: ', old);
            console.log('new: ', value);

            return [...old, value];
        });

        e.target.value = '';
    }

    const removeTag = (index: number) => {
        props.tagsHandler(props.tags.filter((el, i) => i !== index));
    }

    return (
        <div className="tags-input-container">
            {
                props.tags.map((tag, index) => (
                    <div className="tag-item" key={`${tag}-${index}`}>
                        <span className="text">{tag}</span>
                        <span onClick={() => removeTag(index)} className="close">&times;</span>
                    </div>
                ))
            }
            <input
                type="text"
                className="tags-input"
                placeholder="Технология..."
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default TagsInput;