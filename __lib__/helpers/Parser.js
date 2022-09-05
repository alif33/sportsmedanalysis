export const _doc = item => {
    item._id = item._id.toString();
    item.createdAt = item.createdAt.toString();
    item.updatedAt = item.updatedAt.toString();
    return item;
}