const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const roleInput = document.querySelector("#role");
const bioInput = document.querySelector("#bio");
const photoInput = document.querySelector("#photo");
const usersContainer = document.querySelector(".users");

const userManager = {
  users: [],

  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm: function (event) {
    event.preventDefault();
    this.addUser();
  },

  addUser: function () {
    this.users.push({
      name: nameInput.value,
      role: roleInput.value,
      bio: bioInput.value,
      photo: photoInput.value,
    });

    form.reset();
    this.renderUi();
  },

  renderUi: function () {
    usersContainer.innerHTML = "";

    this.users.forEach((user, index) => {
      const card = document.createElement("div");
      card.className =
        "bg-[#555] border border-white/30 rounded-2xl px-5 py-6 text-center";

      const img = document.createElement("img");
      img.src = user.photo;
      img.alt = `Photo of ${user.name}`;
      img.className =
        "w-24 h-24 mx-auto rounded-full object-cover border-4 border-white/80 mb-4";

      const heading = document.createElement("h2");
      heading.className = "text-xl font-bold";
      heading.textContent = user.name;

      const roleText = document.createElement("p");
      roleText.className = "font-bold mt-1";
      roleText.textContent = user.role;

      const description = document.createElement("p");
      description.className = "mt-3 text-sm font-semibold leading-5";
      description.textContent = user.bio;

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.textContent = "Remove";
      removeButton.className =
        "mt-4 rounded-lg border border-red-300 px-4 py-2 font-bold text-red-200 hover:bg-red-500/20";
      removeButton.addEventListener("click", () => {
        this.removeUser(index);
      });

      card.append(img, heading, roleText, description, removeButton);
      usersContainer.appendChild(card);
    });
  },

  removeUser: function (index) {
    this.users.splice(index, 1);
    this.renderUi();
  },
};

userManager.init();