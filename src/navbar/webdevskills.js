import data from "../data/data.json"; // adjust path to the component's locatio

const WebDev =() => {
const webDevSkills = data?.skills?.webDevelopment.javaScriptFrameWorks?.frontEnd ?? [];

if (webDevSkills.length === 0) return <p>No web development skills available.</p>;
return (
<div>
<h2>Web Development Skills</h2>
<ul>
{webDevSkills.map((s, i) => (
<li key={i}>{s}</li>
))}
</ul>
</div>
);
};

export default WebDev;