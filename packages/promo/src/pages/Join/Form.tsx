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
          <FormSelect>
            <option
              value=""
              disabled
              selected
            >
              사는지역
            </option>
          </FormSelect>
          <FormSelect>
            <option
              value=""
              disabled
              selected
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
        <FormTextarea placeholder="이력" />
        <FormTextarea placeholder="자기소개" />
        <FormTextarea placeholder="바라는 점" />
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
`;

const FormRow = styled.div`
`;

const FormField = styled.div`
`;

const FormKey = styled.span`
`;

const FormInput = styled.input`
`;

const FormSelect = styled.select`
`;

const FormTextarea = styled.textarea`
`;
