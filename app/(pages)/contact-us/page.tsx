import { Container } from "@/components/ui/Container";
import { ChildrenProps } from "@/utils/types";

interface LinkItemProps {
  boldTxt: string;
  children: React.ReactNode;
}

interface LinkTextProps extends ChildrenProps {
  href: string;
}

const BranchCol: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="tw-space-y-1 tw-mx-auto">{children}</div>;
};

const BranchHeaders: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="tw-font-bold tw-text-lg">{children}</div>;
};

const LinkItem: React.FC<LinkItemProps> = ({ boldTxt, children }) => {
  return (
    <div>
      <strong>{boldTxt}</strong>
      {children}
    </div>
  );
};

const LinkText: React.FC<LinkTextProps> = ({ children, href }) => {
  return (
    <a href={href} className="tw-text-[#d01141]">
      {children}
    </a>
  );
};

const ContactUsPage = () => {
  return (
    <div>
      <Container>
        <div className="tw-grid tw-gap-4 tw-justify-center md:tw-grid-cols-2 lg:tw-grid-cols-4">
          <BranchCol>
            <BranchHeaders>Toccoa Branch Office</BranchHeaders>
            <div>1067 Mize Road</div>
            <div>P.O. Box 280</div>
            <div>Toccoa, GA 30577</div>
            <div>
              <LinkItem boldTxt="Phone: ">
                <LinkText href="tel:+706-886-1441">706-886-1441</LinkText>
              </LinkItem>
              <LinkItem boldTxt="Fax: ">706-886-3757</LinkItem>
            </div>
          </BranchCol>
          <BranchCol>
            <BranchHeaders>Hartwell Branch Office</BranchHeaders>
            <div>249 East Franklin Street</div>
            <div>Hartwell, GA 30643</div>
            <div>
              <LinkItem boldTxt="Phone: ">
                <LinkText href="tel:+706-376-6961">706-376-6961</LinkText>
              </LinkItem>
              <LinkItem boldTxt="Fax: ">706-376-3184</LinkItem>
            </div>
          </BranchCol>
          <BranchCol>
            <BranchHeaders>Lavonia Branch Office</BranchHeaders>
            <div>11850 Augusta Road</div>
            <div>Lavonia, GA 30553</div>
            <div>
              <LinkItem boldTxt="Phone: ">
                <LinkText href="tel:+706-356-7001">706-356-7001</LinkText>
              </LinkItem>
              <LinkItem boldTxt="Fax: ">706-356-7008</LinkItem>
            </div>
          </BranchCol>
          <BranchCol>
            <BranchHeaders>Clayton Branch</BranchHeaders>
            <div>579 U.S. Highway 441 South</div>
            <div>Clayton, GA 30525</div>
            <div>
              <LinkItem boldTxt="Phone: ">
                <LinkText href="tel:+706-212-0336">706-212-0336</LinkText>
              </LinkItem>
              <LinkItem boldTxt="Fax: ">706-212-0335</LinkItem>
            </div>
          </BranchCol>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
