import { Container, Content } from "./styles";

interface Props {
  search: string;
  onChangeInput: (text: string) => void;
}

export default function Search(props: Props) {
  const { search, onChangeInput } = props;
  return (
    <Container>
      <Content
        type="text"
        placeholder="Search for capital and continents"
        value={search}
        onChange={event => onChangeInput(event.target.value)}
      />
    </Container>
  )
}