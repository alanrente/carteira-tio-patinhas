import {
  Body,
  Container,
  Head,
  Section,
  SectionActions,
  SectionInfos,
} from "./style";
import { EditOutlined } from "@ant-design/icons";

export function LancamentoCard({
  cabecalho,
  valorAtual,
}: {
  cabecalho: string;
  valorAtual: string | number;
}) {
  return (
    <Container>
      <Head>{cabecalho}</Head>
      <Section>
        <SectionInfos>
          <Body>{valorAtual}</Body>
        </SectionInfos>
        <SectionActions>
          <EditOutlined />
        </SectionActions>
      </Section>
    </Container>
  );
}
