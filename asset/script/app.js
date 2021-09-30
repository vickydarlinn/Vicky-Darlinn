// hamberger toggle
document.querySelector(".hamburger_btn").addEventListener("click", (e) => {
  document.querySelector(".nav_list").classList.toggle("active");
  e.target.classList.toggle("active");
});
// filter toggle
document.querySelector(".filter_title").addEventListener("click", () => {
  document.querySelector(".filter_list").classList.toggle("active");
});

const filterOptions = document.querySelectorAll(".filter_item");

filterOptions.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    if (filter.getAttribute("data-category") == "all") {
      updateProjects(projectData);
      return;
    }
    const component = projectData.filter(
      (item) => filter.getAttribute("data-category") === item.category
    );
    updateProjects(component);
  });
});

function updateProjects(projects) {
  const projectContainer = document.querySelector(".projects");
  projectContainer.innerHTML = "";
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = `project_card`;
    projectCard.style.backgroundColor =
      projectBgColor[Math.floor(Math.random() * projectBgColor.length)];
    projectCard.innerHTML = `
    <div class="extended_content">
            <span class="challenge">Challenge:</span>
            <p class="challenge_text">${project.challenge}</p>
            <div class="card_btn_wrapper">
              <a class="btn primary-btn" target="_blank" href="${
                project.githubCode
              }">Code</a>
              <a class="btn primary-btn" target="_blank" href="${
                project.livePreview
              }">Live</a>
            </div>
          </div>
          <img
            src="${project.img}"
            alt="${project.imgDescritption}"
            class="project_img"
          />
          <div class="card_content">
            <h2 class="project_title">${project.title}</h2>
            <div class="lang_use">
            ${project.language
              .map(
                (item) => `
                <span class="batch batch-sky card_batch"  style = background-color:${
                  batchColor[Math.floor(Math.random() * batchColor.length)]
                }>${item}</span>`
              )
              .join("")}
              
            </div>
            <p class="project_description">
              ${project.description}
            </p>
          </div>`;
    projectContainer.append(projectCard);
  });
}

updateProjects(projectData);
