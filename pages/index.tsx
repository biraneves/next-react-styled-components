import Link from 'next/link';
import SubTitle from '../components/SubTitle';
import LanguageTag from '../components/LanguageTag';

export default function Home(props) {
  return (
    <div>
      <header className='headerContainer'>
        <img src={props.avatar_url} />
        <Link href='/sobre'>
          <a>
            <h1>Biraneves - Blog</h1>
          </a>
        </Link>
        
      </header>
      <section className='postsContainer'>
        <SubTitle>Meus repositórios favoritos</SubTitle>
        {
          props.repos.map((project) => {
            return (
              <article className='postsContainer__post'>
                <a href={project.link} target="_blank">{project.repo}</a>
                <LanguageTag languageColor={project.languageColor}>{project.language}</LanguageTag>
                <p>
                  {project.description}
                </p>
              </article>
            );
          })
        }
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const githubResponse = await fetch('https://api.github.com/users/biraneves')
    .then(res => res.json());

  const repos = await fetch('https://gh-pinned-repos.egoist.sh/?username=biraneves')
    .then(res => res.json());

  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      repos
    }
  };
}