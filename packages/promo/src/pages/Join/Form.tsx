import React, { useState } from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Section from '../../components/templates/Section';

interface IFormField {
  name: string;
  placeholder: string;
}

const FormFields: IFormField[][] = [
  [
    { name: 'name', placeholder: '이름' },
    { name: 'tel', placeholder: "전화번호('-' 제외하고 입력)" },
    { name: 'email', placeholder: '이메일' },
  ],
  [
    { name: 'area', placeholder: '사는지역' },
    { name: 'concern', placeholder: '관심분야' },
  ],
  [
    { name: 'record', placeholder: '이력' },
    { name: 'intro', placeholder: '자기소개' },
    { name: 'wish', placeholder: '바라는 점' },
  ],
];

const FormTitle: React.FC = () => (
  <Title>
    <span>커넥션</span>
    {' '}멤버 가입 신청 페이지입니다.
  </Title>
);

const FormDesc: React.FC = () => (
  <Desc>
    신청서 작성 후 완료 버튼을 눌러주세요.<br />
    내부 협의를 거쳐 최종 가입 여부를 안내 드립니다. (1~3주 이내)
  </Desc>
);

const FormPage: React.FC = () => {
  const [filename, setFilename] = useState<string>('');

  return (
    <Layout
      title="가입 신청"
      category="Join"
    >
      <Section
        title={<FormTitle />}
        desc={<FormDesc />}
      >
        <Form>
          <FormRow>
            {FormFields[0].map((field: IFormField, idx: number) => (
              <FormField
                key={`first-row-field-${idx}`}
              >
                <FormKey>
                  {field.placeholder}
                </FormKey>
                <FormInput
                  placeholder={field.placeholder}
                />
              </FormField>
            ))}
          </FormRow>
          <FormRow>
            {FormFields[1].map((field: IFormField, idx: number) => (
              <FormSelect
                key={`second-row-field-${idx}`}
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                >
                  {field.placeholder}
                </option>
              </FormSelect>
            ))}
            <FormField>
              <FormKey>
                학교
              </FormKey>
              <FormInput
                placeholder="학교"
              />
            </FormField>
          </FormRow>
          {FormFields[2].map((field: IFormField, idx: number) => (
            <FormTextarea
              key={`last-row-field-${idx}`}
              placeholder={field.placeholder}
              rows={1}
            />
          ))}
        </Form>
        <UploadContainer>
          <UploadLabel>
            포트폴리오 업로드 (선택 사항)
          </UploadLabel>
          <UploadButton />
          <UploadFileName>
            {filename}
          </UploadFileName>
        </UploadContainer>
      </Section>
    </Layout>
  );
};

export default FormPage;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #575757;

  span {
    color: #298fe3;
  }
`;

const Desc = styled.p`
  margin-top: .3rem;
  font-size: .8rem;
`;

const Form = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const FormField = styled.div`
  width: 30%;
`;

const FormKey = styled.span`
  color: #298fe3;
  font-size: .6rem;
`;

const FormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: .9rem;
  padding: .3rem;
  line-height: 1.43;
  border: 0;
  border-bottom: 1.3px solid #a1a1a1;

  &:focus {
    outline: none;
    border-bottom-color: #298fe3;
  }
`;

const FormSelect = styled.select`
`;

const FormTextarea = styled.textarea`
  width: 85%;
  box-sizing: border-box;
  text-size-adjust: none;
  font-size: .9rem;
  padding: .3rem;
  line-height: 1.43;
  border: 0;
  border-bottom: 1.3px solid #a1a1a1;
  resize: none;
  font-family: "Noto Sans KR", sans-serif !important;
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    border-bottom-color: #298fe3;
  }
`;

const UploadContainer = styled.div`
`;

const UploadLabel = styled.p`
`;

const UploadButton = styled.button`
`;

const UploadFileName = styled.span`
`;
