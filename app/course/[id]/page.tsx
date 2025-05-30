import Heading from "@/components/heading";
import { IFetchedCourse } from "@/components/home-page/courses";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import NoContentYet from "@/components/no-content-yet";
import CourseDetail from "@/components/single-course-page/course-detail";
import { getCoursePublicDetails } from "@/lib/fetch-data";
import { NextPage } from "next";

interface Props {
  params: { id: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const courseDetail = (await getCoursePublicDetails(
    params.id
  )) as IFetchedCourse;

  return (
    <>
      <Heading
        title={`Course Detail`}
      />
      <Header />
        {courseDetail && courseDetail.status === "APPROVED" ? (
          <CourseDetail courseDetail={courseDetail} courseId={params.id} />
        ) : (
          <NoContentYet description={""} />
        )}
      <Footer />
    </>
  );
};

export default page;
