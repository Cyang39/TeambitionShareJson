// 请注释掉想要暴露的字段

function project(item) {
  const keys = [
    // "_id",
    // "name",
    "_creatorId",
    "logo",
    // "py",
    // "pinyin",
    "description",
    "category",
    "_organizationId",
    "visibility",
    "uniqueIdPrefix",
    "isPublic",
    // "created",
    // "updated",
    "isArchived",
    "isSuspended",
    "inviteLink",
    "hasRight",
    "hasOrgRight",
    "organization",
    "_defaultRoleId",
    // "_rootCollectionId",
    "_sourceId",
    "_defaultCollectionId",
    "customfields",
    "sortMethod",
    "normalType",
    "proTemplateType",
    "isTemplate",
    "taskDefaultInvolvesVisibility",
    "payload",
    "windowModeOfAddTask",
    "_suspendedById",
    "suspendedAt",
    "startDate",
    "endDate",
    "statusDegree",
    "source",
    "openId",
    "labels",
    "tasksCount",
    "postsCount",
    "eventsCount",
    "worksCount",
    "tagsCount",
    "membersCount",
    "permissionBinding",
    "pushStatus",
    "_roleId",
    "orgLevel",
    "_orgRoleId",
    "role",
    "starsCount",
    "isStar",
    "memberIdentityIds",
    "applications",
    "creator",
    "suspendedBy",
    "shortLink",
  ];
  keys.forEach((key) => {
    delete item[key];
  });
  return item;
}

function dir(item) {
  const keys = [
    // "_id",
    // "_parentId",
    "collectionType",
    "_creatorId",
    "_projectId",
    "_organizationId",
    "description",
    // "title",
    // "pinyin",
    // "py",
    // "updated",
    // "created",
    "isArchived",
    "workCount",
    // "collectionCount",
    // "color",
    "objectType",
    "visible",
    "involveMembers",
    "isConfigurable",
    "lockedConfigurabilityBy",
    "creator",
    "involvers",
  ];
  keys.forEach((key) => {
    delete item[key];
  });
  return item;
}

function file(item) {
  const keys = [
    // "_id",
    // "fileName",
    // "pinyin",
    // "py",
    // "fileType",
    // "fileSize",
    "fileKey",
    "fileCategory",
    // "imageWidth",
    // "imageHeight",
    // "_parentId",
    "_projectId",
    "_organizationId",
    "_creatorId",
    "tagIds",
    "visible",
    // "downloadUrl",
    "thumbnailUrl",
    "thumbnail",
    "description",
    "source",
    "involveMembers",
    // "created",
    // "updated",
    "lastVersionTime",
    "lastUploaderId",
    "isArchived",
    "objectType",
    "previewUrl",
    "creator",
    "parentVisible",
    "parentInvolveMembers",
  ];
  keys.forEach((key) => {
    delete item[key];
  });
  return item;
}

module.exports = {
  project,
  dir,
  file,
};
