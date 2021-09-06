const tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};

function replaceTag(tag) {
    return tagsToReplace[tag] || tag;
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, replaceTag);
}

export default escapeHtml;
