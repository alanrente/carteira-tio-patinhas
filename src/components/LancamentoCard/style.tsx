import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #000 !important;

  border-radius: 8px;
`;

export const Section = styled.div`
  padding: 4px;

  display: flex;
  flex-direction: row;
`;

export const SectionInfos = styled.div`
  width: 95%;
`;

export const SectionActions = styled.div`
  width: 5%;
  background-color: #8aa3b8;
  border-radius: 0 8px 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-left: lightgray 2px solid;

  cursor: pointer;
`;

export const Head = styled.div`
  /* background-color: #35bbbb; */
  min-height: 28px;

  font-weight: 700;
  letter-spacing: 1px;

  padding-left: 4px;

  border-radius: 8px 0 0 0;
`;

export const Body = styled.div`
  background-color: #35bb78;
  padding: 0 0 0 1.5rem;
  font-size: larger;
  font-weight: 600;
  min-height: calc(28px * 2);

  border-top: lightgray 2px solid;

  border-radius: 0 0 0 8px;
`;

export const Footer = styled.div`
  /* background-color: #325041; */
  font-size: small;
  font-weight: 400;

  .title {
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 4px;
  }
`;
