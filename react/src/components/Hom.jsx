import{Link}from "react-router-dom"

const Hom = () => {
    return ( 
        <div className="inner-hom">
            <h1>홈화면에 오신것을 환영합니다</h1>
            <p>아래를 통해 방명록을 작성할수있습니다</p>
            <Link to={'/c'}>방명록 작성하기</Link>
        </div>
    );
}

export default Hom;
