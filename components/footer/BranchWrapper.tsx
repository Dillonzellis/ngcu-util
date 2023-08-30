import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

import { ChildrenProps } from "@/utils/types";
import { Container } from "@/components/ui/Container";

const BranchCol: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="tw-text-center md:tw-text-left tw-text-white tw-mx-auto tw-space-y-3">
      {children}
    </div>
  );
};

const BranchHeader: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="tw-text-xl">{children}</div>;
};

const IconLine: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="tw-flex tw-gap-2">{children}</div>;
};

export const BranchWrapper = () => {
  return (
    <div className="tw-pt-10 tw-pb-4 tw-bg-brandingBlue-400">
      <Container>
        <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
          <BranchCol>
            <BranchHeader>Toccoa Branch</BranchHeader>
            <div>
              <IconLine>
                <MapPinIcon className="tw-h-5 tw-w-5 tw-text-brandingRed-400" />
                <span>1067 Mize Road</span>
              </IconLine>
              <div>P.O. Box 280</div>
              <div>Toccoa, GA 30577</div>
            </div>
            <div>
              <IconLine>
                <PhoneIcon className="tw-h-5 tw-w-5 tw-text-brandingRed-400" />
                <a href="tel:+706-866-1441">(706) 886-1441</a>
              </IconLine>
              <IconLine>
                <EnvelopeIcon className="tw-h-5 tw-w-5 tw-text-brandingRed-400" />
                <a href="mailto:mail@ngcu.org">mail@ngcu.org</a>
              </IconLine>
            </div>
          </BranchCol>

          <BranchCol>
            <BranchHeader>Lavonia Branch</BranchHeader>
            <div>
              <IconLine>
                <MapPinIcon className="tw-h-5 tw-w-5 tw-text-brandingRed-400" />
                <span>11850 Augusta Road</span>
              </IconLine>
              <div>Lavonia, GA 30553</div>
            </div>
            <IconLine>
              <PhoneIcon className="tw-h-5 tw-w-5 tw-text-brandingRed-400" />
              <a href="tel+:706-356-7001">(706) 356-7001</a>
            </IconLine>
          </BranchCol>

          <BranchCol>
            <BranchHeader>Hartwell Branch</BranchHeader>
            <div>
              <IconLine>
                <MapPinIcon className="tw-h-5 tw-w-5 tw-text-brandingRed-400" />
                <span>249 East Franklin Street</span>
              </IconLine>
              <div>Hartwell, GA 30643</div>
            </div>
            <IconLine>
              <PhoneIcon className="tw-h-5 tw-w-5 tw-text-brandingRed-400" />
              <a href="tel+:706-376-6961">(706) 376-6961</a>
            </IconLine>
          </BranchCol>

          <BranchCol>
            <BranchHeader>Clayton Branch</BranchHeader>
            <div>
              <IconLine>
                <MapPinIcon className="tw-h-5 tw-w-5 tw-text-brandingRed-400" />
                <span>579 U.S. Highway 441 South</span>
              </IconLine>
              <div>Clayton, GA 30525</div>
            </div>
            <IconLine>
              <PhoneIcon className="tw-h-5 tw-w-5 tw-text-brandingRed-400" />
              <a href="tel+:706-212-0336">(706)-212-0336</a>
            </IconLine>
          </BranchCol>
        </div>
      </Container>
    </div>
  );
};
