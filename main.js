function updateUserInfo(user, newName) {
    return { ...user, name: newName };
  }

  function getUserInfo(user) {
    return user.name;
  }

  const user = { name: 'John', age: 30 };
  const updatedUser = updateUserInfo(user, 'Alice');
  console.log(getUserInfo(updatedUser));