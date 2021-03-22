var getUserRepos = function() {
  fetch("https://api.github.com/users/singfieldotis/repos");
};

getUserRepos();