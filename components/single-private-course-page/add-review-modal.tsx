import { Box, Modal, Rating } from "@mui/material";
import { FC, Dispatch, SetStateAction, useState, JSX } from "react";
import FormInput from "../form-input";
import BtnWithLoading from "../btn-with-loading";
import toast from "react-hot-toast";
import { createReview } from "@/lib/mutation-data";
import { IReview } from "@/types";

interface Props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  ratingValue: number | null;
  setRatingValue: Dispatch<SetStateAction<number | null>>;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  courseId: string;
  setReviews: Dispatch<SetStateAction<IReview[]>>;
  setAverageRatings: Dispatch<SetStateAction<number>>;
  setHasReviewed: Dispatch<SetStateAction<boolean>>;
}

const AddReviewModal: FC<Props> = ({
  openModal,
  setOpenModal,
  ratingValue,
  setRatingValue,
  comment,
  setComment,
  courseId,
  setReviews,
  setAverageRatings,
  setHasReviewed,
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

const submitHandler = async () => {
  if (
    ratingValue === null ||
    ratingValue === 0 ||
    comment.trim().length < 1
  ) {
    toast.error("Please Complete Your Rating!");
    return;
  }
  
  setIsLoading(true);
  
  try {
    const res = await createReview(courseId, ratingValue, comment);
    
    if (res?.success) {
      setOpenModal(false);
      setReviews(res.reviews.reverse());
      setAverageRatings(res.ratings);
      setHasReviewed(true);
      toast.success("Review added successfully!");
    } else {
      toast.error(res?.message || "Cannot create answer with inappropriate content");
    }
  } catch (error: any) {
    setIsLoading(false);
    toast.error("Something went wrong");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-content-wrapper text-center">
          <p className="form-title">What made you give this rating?</p>
          <p className="form-input-label mt-2 !text-lg">Select your rating</p>
          <Rating
            size="large"
            name="simple-controlled"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
            precision={0.5}
            className="mb-3"
          />

          <FormInput
            label=""
            textarea
            rows={6}
            id="comment"
            placeholder="Tell us about your own personal experience taking this course. Was it a good match for you?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            preventLinks={true}
            maxLength={100}
          />

          <BtnWithLoading
            content="Save And Publish"
            isLoading={isLoading}
            onClick={submitHandler}
          />
        </Box>
      </Modal>
    </>
  );
};

export default AddReviewModal;
