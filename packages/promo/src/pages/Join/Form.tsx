import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Section from '../../components/templates/Section';

interface IFormField {
  name: string;
  placeholder: string;
}

const firstRowFields: IFormField[] = [
  { name: 'name', placeholder: '이름' },
  { name: 'tel', placeholder: "전화번호('-' 제외하고 입력)" },
  { name: 'email', placeholder: '이메일' },
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

const FormPage: React.FC = () => (
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
          {firstRowFields.map((field: IFormField, idx: number) => (
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
          <FormSelect
            defaultValue=""
          >
            <option
              value=""
              disabled
            >
              사는지역
            </option>
          </FormSelect>
          <FormSelect
            defaultValue=""
          >
            <option
              value=""
              disabled
            >
              관심분야
            </option>
          </FormSelect>
          <FormField>
            <FormKey>
              학교
            </FormKey>
            <FormInput
              placeholder="학교"
            />
          </FormField>
        </FormRow>
        <FormTextarea
          placeholder="이력"
          rows={1}
        />
        <FormTextarea
          placeholder="자기소개"
          rows={1}
        />
        <FormTextarea
          placeholder="바라는 점"
          rows={1}
        />
      </Form>
    </Section>
  </Layout>
);

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

  &:focus {
    outline: none;
    border-bottom-color: #298fe3;
  }
`;
