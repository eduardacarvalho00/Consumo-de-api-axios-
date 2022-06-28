import { Container, Content, Button } from './styles';

export interface PropsName {
  includes(countryName: string): unknown;
  name: {
    common: string;
  }
  continents: string;
  population: number;
  flags: {
    png: string;
  }
  capital: string;
  currencies: {
    name: string;
    symbol: string;
  }
  country: string;
}

interface Props {
  countryesFilter: PropsName[];
}

export default function Main(props: Props) {
  const { countryesFilter } = props;


  return (
    <Container>
      <Content>
        <ul>
          {countryesFilter?.map((country, index) => (
            <>
              <li key={index}>
                <h2>{country.name.common}</h2>
                <img src={country.flags.png} alt="" />
                <p>Continet: {country.continents}</p>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Currencies: name:  </p>
              </li>

            </>
          ))}
        </ul>

      </Content>
      <Button href="#header"></Button>
    </Container>
  )
}