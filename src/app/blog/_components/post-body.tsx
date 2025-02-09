// import markdownStyles from "./markdown-styles.module.css";

import Feedback from "@/components/Common/Feedback";
import JoinOurTeam from "@/components/JoinOurTeam/JoinOurTeam";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div id="blogPageContent" className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="table-responsive">
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="table table-striped table-responsive"

            />
          </div>
        </div>
      </div>
      <Feedback/>
    </div>
  );
}