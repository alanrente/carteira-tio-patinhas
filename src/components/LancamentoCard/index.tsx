import {
  Body,
  Container,
  Footer,
  Head,
  Section,
  SectionActions,
  SectionInfos,
} from "./style";
import { EditOutlined } from "@ant-design/icons";

export function LancamentoCard({
  cabecalho,
  valorAtual,
  qtd,
  pm,
  vp,
  vpa,
  lpa,
  onClick,
}: {
  cabecalho: string;
  valorAtual: string | number;
  qtd?: string | number;
  pm?: string | number;
  vp?: string | number;
  vpa?: string | number;
  lpa?: string | number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <Container>
      <Head>{cabecalho}</Head>
      <Section>
        <SectionInfos>
          <Body>
            {Number(valorAtual).toFixed(2)}
            <Footer>
              <span className="title">qtd:</span>
              {Number(qtd).toFixed(2)}
              <span className="title">pm:</span>
              {Number(pm).toFixed(2)}
              <span className="title">vp:</span>
              {Number(vp).toFixed(2)}
              <span className="title">vpa:</span>
              {Number(vpa).toFixed(2)}
              <span className="title">lpa:</span>
              {Number(lpa).toFixed(2)}
            </Footer>
          </Body>
        </SectionInfos>
        <SectionActions onClick={onClick}>
          <EditOutlined />
        </SectionActions>
      </Section>
    </Container>
  );
}
