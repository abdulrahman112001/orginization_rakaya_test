import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import MainHeader from "../../components/atoms/MainHeader";
import ModalComp from "../../components/atoms/ModalComp";
import AddOrder from "../../components/organisms/orders/AddOrder";
import DetailsOrder from "../../components/organisms/orders/DetailsOrder";
import { useFetch } from "../../hooks";
import Loading from "../../components/molecules/Loading";
import DataNotFound from "../../components/molecules/NotFound";

export default function Orders() {
  const [openAddFaculty, setOpenAddFaculty] = useState(false);
  const [openDetailsOrder, setOpenDetailsOrder] = useState(false);
  const [detailsOrder, setDetailsOrder] = useState("");

  const {
    data: Orders,
    isLoading,
    isRefetching,
  } = useFetch({
    endpoint: `orders`,
    queryKey: ["my_orders"],
    onError(e) {
      console.log("e", e);
    },
  });

  return (
    <div>
      <MainHeader
        title="الطلبات"
        addTitle="اضافة طلب"
        action={() => setOpenAddFaculty(true)}
      />
      {isLoading || isRefetching ? (
        <Loading />
      ) : Orders?.all_user_orders?.length ? (
        <>
          <Grid container spacing={6}>
            {Orders?.all_user_orders?.map((item) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={item?.id}
                className={{ height: "290px" }}
              >
                <Card sx={{ position: "relative" }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        width="80"
                        height="80"
                        src="https://img.icons8.com/dotty/80/purchase-order.png"
                        alt="purchase-order"
                      />
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {item?.name_ar}
                      </Typography>
                      <Typography
                        sx={{ mb: 4, color: "text.secondary" }}
                        className="text-center"
                      >
                        {item?.source_registration}
                      </Typography>
                      <Typography
                        sx={{ mb: 4, color: "text.secondary" }}
                        className={`text-center font-bold px-2 py-1 rounded-md text-white `}
                        style={{ backgroundColor: item?.status?.color }}
                      >
                        {item?.status?.name}
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          setOpenDetailsOrder(true);
                          setDetailsOrder(item);
                        }}
                      >
                        تفاصيل طلب
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

         
        </>
      ) : (
        <DataNotFound title={"لايوجد طلبات"} />
      )}
       <ModalComp
            open={openAddFaculty}
            className={"  "}
            onClose={() => setOpenAddFaculty(false)}
            Children={<AddOrder setOpenAddFaculty={setOpenAddFaculty} />}
          />
          <ModalComp
            open={openDetailsOrder}
            className={"  "}
            onClose={() => setOpenDetailsOrder(false)}
            Children={
              <DetailsOrder
                data={detailsOrder}
                setDetailsOrder={setDetailsOrder}
              />
            }
          />
    </div>
  );
}
