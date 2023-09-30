import { Skeleton } from "antd";
import {
  Body,
  Container,
  Head,
  Section,
  SectionActions,
  SectionInfos,
} from "./style";
import { EditOutlined } from "@ant-design/icons";

export function LancamentoCard() {
  return (
    <Container>
      <Head>MXRF11</Head>
      <Section>
        <SectionInfos>
          <Body>15,50</Body>
        </SectionInfos>
        <SectionActions>
          <EditOutlined />
        </SectionActions>
      </Section>
    </Container>
  );
}
