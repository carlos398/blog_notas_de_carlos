import React from 'react'

const Home = () => {
  return (
    <div className='HomeContainer'>
      <div className='HeroContainer'>
        <img src="" alt="" />
        <h2>Titulo</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, nostrum temporibus. Cum delectus unde, eveniet distinctio fugiat numquam consequatur aliquam excepturi? Esse sapiente nam natus! Soluta odio dolores sint fugiat maiores voluptas quos ea. Ab cupiditate veritatis quo voluptate excepturi reiciendis esse ipsum delectus, incidunt voluptatem iste ipsa molestias dolore.</p>
      </div>

      <div className='ProjectsContainer'>
        <h2>Proyectos</h2>
        <div className='Projects'>

          <div className='ProjectCard'>
            <div className="ProjectImg">
              <img src="" alt="" />
            </div>
            <div className="ProjectTitle">
              <h3>Titulo</h3>
            </div>
            <div className="ProjectDescription">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, praesentium?</p>
            </div>
          </div>

        </div>
      </div>

      <div className='BlogContainer'>
        <h2>Blog</h2>
        <div className='BlogImg'>
          <h3>BlogTitle</h3>
          <img src="" alt="" />
        </div>
        <div className='BlogDescription'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa, temporibus cupiditate dolorum autem totam sapiente, placeat optio quia, accusamus molestiae esse repellat architecto officiis dicta saepe. Reiciendis, repudiandae odio!</p>
        </div>
      </div>
    </div>
  )
}

export default Home