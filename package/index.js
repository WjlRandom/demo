/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => "hello world";

exports.stripPrivateProperties = (propertyList, targetList) => {
  let result = targetList;
  propertyList.forEach((property) => {
    targetList.forEach((item) => {
      if (item[property]) {
        delete item[property];
      }
    });
  });
  return result;
};
exports.excludeByProperty = (property, list) => {
  let result = list.filter((item) => {
    return !item[property];
  });
  return result;
};
exports.sumDeep = (list) => {
  let result = [];
  list.forEach((item) => {
    const objects = item.objects;
    const calcObj = objects.reduce((prev, cur) => {
      return { val: prev.val + cur.val };
    });
    result.push({
      objects: calcObj.val,
    });
  });
  return result;
};
exports.applyStatusColor = (colorEnums, statusList) => {
  let newEnums = {};
  for (let i in colorEnums) {
    colorEnums[i].forEach((el) => {
      newEnums[el] = i;
    });
  }
  const result = statusList.filter((statusItem) => {
    statusItem.color = newEnums[statusItem.status];
    return statusItem.color != undefined;
  });
  return result;
};
exports.createGreeting = (greet, greetType) => {
  return greet.bind(null, greetType);
};
exports.setDefaults = (obj) => {
  let fn = function () {
    return Object.assign({}, arguments[0], arguments[1]);
  };
  return fn.bind(null, obj);
};
exports.fetchUserByNameAndUsersCompany = async (username, services) => {
  const fetchUsers = await services.fetchUsers();
  const user = fetchUsers.filter((user) => {
    return user.name == username;
  });
  if (user.length > 0) {
    const fetchCompany = await services.fetchCompanyById(user[0].companyId);
    const fetchStatus = await services.fetchStatus();
    return Promise.resolve({
      company: fetchCompany,
      status: fetchStatus,
      user: user[0],
    });
  } else {
    throw new Error("error");
  }
};
