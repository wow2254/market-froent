import { DownloadOutlined } from "@ant-design/icons";

function HaderPage() {
    return (
        <div id="header-area">
            <Link to="/">
                <img src="/images/icons/logo.png" />
            </Link>
            <Button
                size="large"
                onClick={function () {
                    history.push("/upload");
                }}
                icon={<DownloadOutlined />}
            >
                상품 업로드
            </Button>
        </div>
    );
}

export default HaderPage;
