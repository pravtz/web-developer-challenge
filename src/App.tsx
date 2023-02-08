import { BoxPost } from "./components/BoxPosts"
import { BoxRegisterPost } from "./components/BoxRegisterPost"
import { LayoutMain } from "./components/LayoutMain"
import { ContentPosts, Wrapper } from "./styles/AppPage"


const posts = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    figure: "",
    author: "Manuela Oliveira",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    figure: "",
    author: "Manuela Oliveira",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    figure: "",
    author: "Manuela Oliveira",
  },

]


function App() {


  return (

    <LayoutMain>
      <Wrapper>
        <BoxRegisterPost />
        <h2>Feed</h2>
        <ContentPosts>
          {posts.map((post, index) => {
            return (

              <BoxPost
                key={index}
                text={post.text}
                figure={post.figure}
                author={post.author}
              />
            )
          })}
        </ContentPosts>
      </Wrapper>

    </LayoutMain>


  )
}

export default App
