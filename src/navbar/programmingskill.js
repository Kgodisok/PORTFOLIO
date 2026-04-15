
import data from "../data/data.json"; // adjust path to the component's locatio

const ProgrammingSkill = () => {
const skills = data?.skills?.programmingLanguages ?? [];
if (skills.length === 0) return <p>No programming skills available.</p>;
return (
<div>
<h2>Programming Skills</h2>
<ul>
{skills.map((s, i) => (
<li key={i}>{s}</li>
))}
</ul>
</div>
);
};

export default ProgrammingSkill;
