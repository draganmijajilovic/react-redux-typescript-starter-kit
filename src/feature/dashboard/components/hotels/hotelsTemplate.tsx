import React from 'react';

interface HotelsTemplateProps {
    hotel: any;
}

export function HotelsTemplate(props: HotelsTemplateProps) {
    return (
        <div>{props.hotel?.name}</div>
    )
}