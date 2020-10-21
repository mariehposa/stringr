import React from 'react';
import footage from '../img/footage.png';
import archive from '../img/archive.png';
import preview from '../img/preview.png';
import download from '../img/download.png';

export default function HowItWorks() {
    const data = [
        {'id': 1, img: {footage}, 'title': 'request footage', 'subtitle': 'from our network of 75,000+ videographers'},
        {'id': 2, img: {archive}, 'title': 'search the archive', 'subtitle': 'for thousands of available videos for instant use'},
        {'id': 3, img: {preview}, 'title': 'preview video', 'subtitle': 'for shots and quality before you download'},
        {'id': 4, img: {download}, 'title': 'download', 'subtitle': 'videos licensed and ready to publish'}
    ]

    return (
        <div>
            {
                data.map(datum => <div key={datum.id} data={data} />)
            }
        </div>
    )
}