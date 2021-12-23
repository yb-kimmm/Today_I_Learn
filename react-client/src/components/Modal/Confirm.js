const Confirm = (show, title, confirmBtnText) => {
  return (
    <div>
      {!show ? (
        <div className="modalOutside">
          <div id="confirmModal">
            <div className="title">1</div>
            <div className="btnContainer">
              {/* @click="$emit('confirm', false)" */}
              <button className="cancel btn">취소</button>
              {/* @click="$emit('confirm', true)" */}
              <button className="confirm btn">1</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Confirm;
