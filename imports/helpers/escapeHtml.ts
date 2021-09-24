const tagsToReplace: any = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};

function replaceTag(tag: string): string {
    return tagsToReplace[tag] || tag;
}

function escapeHtml(str: string) {
    return str.replace(/[&<>]/g, replaceTag);
}

export default escapeHtml;
