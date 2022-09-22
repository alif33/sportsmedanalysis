import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getData, updateData } from "../../../__lib__/helpers/HttpService";
import DashboardLayout from "../../../src/components/DashboardLayout";
import style from "./EmailPreferences.module.css";
import { logedIn } from "../../../store/user/actions";
import toast from "react-hot-toast";

const FollowingPage = () => {
  const [ tags, setTags ] = useState();
  const [check, setCheck] = useState(true);
  const router = useRouter();
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { __u__ } = user;
  const { info } = __u__;

  useEffect(()=>{
    getData("/tags")
    .then(res=>{
      setTags(res);
    })
  }, [])

  const unsubscribedHandler = (tagName, status)=>{
    updateData(`/user/tags/following?tagName=${tagName}`,
      { status },
      __u__.token
    ).then((res) => {
      if (res.success) {
        toast.success(`${res.message}`);
        const { token, info } = res;
        dispatch(
          logedIn({
            token,
            info,
          })
        );
      }
    });
  }

  const subscribedHandler = (tagName, status)=>{
    updateData(`/user/tags/following?tagName=${tagName}`,
      { status },
      __u__.token
    ).then((res) => {
      if (res.success) {
        toast.success(`${res.message}`);
        const { token, info } = res;
        dispatch(
          logedIn({
            token,
            info,
          })
        );
      }
    });
  }

  return (
    <DashboardLayout stutas="following">
      <div className="container ps-1 pe-2 mt-2 mb-5">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div className="profile-text">
            <h3 className="mt-2">Tags</h3>
          </div>
        </div>
          <div className="row">
            <div className="col-md-12">
              <h5>Subscribed</h5>
            </div>

            <div className="col-md-12">
              <div className="row mt-1">
                {
                  tags && tags.map((item, index)=>{
                    if(info.tags.includes(item.tagName)){
                      return(
                        <div key={ index } className="col-md-2 pb-1">
                          <div className={style.input_check}>
                            <div
                              onClick={() => unsubscribedHandler(item.tagName, "UNSUBSCRIBE")}
                              className={check ? style.active : ""}
                            >
                              { item.tagName }
                              <span className={style.checkmark}></span>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <h5>For you</h5>
            </div>
            <div className="col-md-12">
              <div className="row mt-1">
              {
                  tags && tags.map((item, index)=>{
                    if(!info.tags.includes(item.tagName)){
                      return(
                        <div key={ index } className="col-md-2 pb-1">
                          <div className={style.input_check}>
                            <div
                              onClick={() => subscribedHandler(item.tagName, "SUBSCRIBE")}
                            >
                              { item.tagName }
                              <span className={style.checkmark}></span>
                            </div>
                          </div>
                        </div>
                      ) 
                    }
                  })
                }
              </div>
            </div>
          </div>
      </div>
    </DashboardLayout>
  );
};

export default FollowingPage;
