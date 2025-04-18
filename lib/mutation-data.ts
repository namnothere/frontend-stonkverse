import axios from "axios";
import axiosClientV2 from "./api-client-v2";
import axiosClient from "./api-client-v1";

export const createPaymentIntent = async (amount: number) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/payment`,
      { amount },
      {
        withCredentials: true,
      }
    );

    return data.client_secret;
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (courseId: string, payment_info: any) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/create-order`,
      { courseId, payment_info },
      {
        withCredentials: true,
      }
    );

    return data.order;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export const createQuestion = async (
  title: string,
  question: string,
  courseId: string,
  contentId: string
) => {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/add-question`,
      { title, question, courseId, contentId },
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export const createReview = async (
  courseId: string,
  rating: number,
  review: string
) => {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/add-review/${courseId}`,
      { rating, review },
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export const addAnswer = async (
  answer: string,
  courseId: string,
  contentId: string,
  questionId: string
) => {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/add-answer`,
      { answer, courseId, contentId, questionId },
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export const addReviewReply = async (
  answer: string,
  courseId: string,
  reviewId: string
) => {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/add-reply`,
      { courseId, answer,  reviewId },
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export const addAnswerQuiz = async (
  courseId: string,
  contentId: string,
  answers: {
    questionId: string,
    answer: string[],
  }[],
) => {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/add-answer-quiz`,
      { courseId, answers, contentId},
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export const addNewContact = async (contactData: {
  email: string;
  problem: string;
  explain: string;
}) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/contact`,
      contactData
    );

    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

type IPromotion = {
  code: string;
  course: string;
  expDate: Date;
  percentOff: number;
  usageLimit: number;
  usageCount: number;
};

export const createPromotion = async (params: IPromotion) => {
  try {
    const data: IPromotion = await axiosClientV2.post(
      `/admin/promotion`,
      params,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.log("Fail to create promotion:",error);
  }
};

export const deletePromotionById = async (id: string) => {
  try {
    const data: IPromotion = await axiosClientV2.delete(
      `/admin/promotion/${id}`,
    );
    return data;
  } catch (error) {
    console.log("Fail to delete promotion:",error);
  }
};

export const getVerifyPromotion = async (IData: {
  course: string;
  code: string;
}) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL_V2}/promo/verify`,
      IData
    );
    return data;
  } catch (error: any) {
    console.log("Fail to verify promotion:",error);
  }
};

// instructor
export const approveCourse = async (id: string) => {
  try {
    const data = await axiosClient.put(
      `/admin/courses/${id}/approve`,
      { id },
      { withCredentials: true }
    );
    return data;
  } catch (error) {
    console.log("Fail to approve course:", error);
  }
};

export const rejectCourse = async (id: string) => {
  try {
    const data = await axiosClient.put(
      `/admin/courses/${id}/reject`,
      { id },
      { withCredentials: true }
    );
    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
