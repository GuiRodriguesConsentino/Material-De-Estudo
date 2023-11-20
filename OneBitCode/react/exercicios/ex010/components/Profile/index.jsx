import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {
   // State atualiza o DOM, assim conseguindo alterar o resultado após uma ação
   // [valor], funçãoModificadora
  const [followText, setFollowText] = useState("Follow")

  function handleClick() {
    alert("Você agora está seguindo!");
    setFollowText[1]("Following")
  }

  return (
    <div className="styles.container">
      <img className="styles.avatar" src="props.avatar" alt="props.name" />
      <Title>
        <span>{props.name}</span>
        <button
          // Usando eventos JS no React utilizando o "ON" + "Nome do evento"
          onClick={handleClick}
          className={styles.followButton}
        >
          {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        arial-labem="social links"
      >
        <LinkButton href="{props.githubUrl}">GitHub</LinkButton>
        <LinkButton href="{props.linkedinUrl}">LinkedIn</LinkButton>
        <LinkButton href="{props.twitterUrl}">Twitter</LinkButton>
      </ProfileSection>
    </div>
  );
}