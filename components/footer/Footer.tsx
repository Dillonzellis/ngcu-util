import { Container } from "@/components/ui/Container";
import { BranchWrapper } from "./BranchWrapper";

export const Footer = () => {
  return (
    <footer>
      <div className="tw-bg-brandingBlue-400">
        <BranchWrapper />
        <Container>
          <div className="tw-flex tw-justify-center tw-flex-wrap tw-pb-8 tw-items-center tw-gap-8">
            <img
              src="https://www.ngcu.org/wp-content/uploads/2022/12/equalhousing.png"
              alt="equal housing logo"
            />
            <img
              src="https://www.ngcu.org/wp-content/uploads/2022/12/ncua-logo-footer.jpg"
              alt="ncua logo"
            />
            <img
              src="https://www.ngcu.org/wp-content/uploads/2023/01/2023-LSCU-Member-2.png"
              alt="lscu memeber logo"
            />
          </div>
          <div className="tw-border-t tw-border-white">
            <div className="tw-py-6 tw-text-white tw-text-center">
              Copyright © 2023 All Rights Reserved by North Georgia Credit
              Union. Federally Insured by NCUA.
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
