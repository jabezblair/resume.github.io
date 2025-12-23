function scrollToUpload() {
  document.getElementById("upload").scrollIntoView({behavior:"smooth"});
}

function analyzeResume() {
  const skillsInput = document.getElementById("skills").value.toLowerCase();
  const skills = skillsInput.split(",").map(s => s.trim());

  let score = Math.min(100, skills.length * 15);
  document.getElementById("progressBar").style.width = score + "%";
  document.getElementById("scoreText").innerText = score + "% Match Found";

  recommendJobs(skills);
}

function recommendJobs(skills) {
  const jobList = [
    {title:"Web Developer", skills:["html","css","javascript"]},
    {title:"AI/ML Engineer", skills:["python","machine learning","ai"]},
    {title:"Data Analyst", skills:["excel","python","sql"]},
    {title:"IoT Engineer", skills:["iot","arduino","embedded"]},
    {title:"Cloud Engineer", skills:["aws","cloud","devops"]}
  ];

  const container = document.getElementById("jobCards");
  container.innerHTML = "";

  jobList.forEach(job => {
    const match = job.skills.filter(s => skills.includes(s));
    if(match.length > 0){
      const card = document.createElement("div");
      card.className = "job-card";
      card.innerHTML = `
        <h3>${job.title}</h3>
        <p>Matched Skills: ${match.join(", ")}</p>
      `;
      container.appendChild(card);
    }
  });
}
