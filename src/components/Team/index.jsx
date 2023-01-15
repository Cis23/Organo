import { Section } from "./styled";

const Team = ({teamName,...props}) => {
  return (
    <Section>
      <h3>{teamName}</h3>
    </Section>
  )
}

export default Team;