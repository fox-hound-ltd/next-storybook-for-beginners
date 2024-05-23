import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "./dashboard.tsp";
import "./employee.tsp";
import "./partner.tsp";

using TypeSpec.Http;

@service({
  title: "Service",
})
namespace Service;

@route("/v1/dashboard")
interface V1 {
  @get
  @route("/order")
  Order(): BaseResponse<Dashboard.Order[]>;
  @get
  @route("/deposit")
  Deposit(): BaseResponse<Dashboard.Deposit>;
  @get
  @route("/chart")
  Chart(): BaseResponse<Dashboard.Chart>;
}
@route("/v1/employee")
interface V1Employee {
  @get
  @route("/")
  List(): BaseResponse<Employee.Employee[]>;
  @get
  @route("/{id}")
  Get(id: string): BaseResponse<Employee.Employee>;
  @post
  @route("/")
  Create(...Employee.CreateOrUpdate): BaseResponse<Employee.Employee>;
  @put
  @route("/{id}")
  Update(...Employee.CreateOrUpdate): BaseResponse<Employee.Employee>;
  @delete
  @route("/{id}")
  Delete(id: string): BaseResponse<Employee.Employee>;
}
@route("/v1/partner")
interface V1Partner {
  @get
  @route("/")
  List(): BaseResponse<Partner.Partner[]>;
  @get
  @route("/{id}")
  Get(id: string): BaseResponse<Partner.Partner>;
  @post
  @route("/")
  Create(...Partner.Partner): BaseResponse<Partner.Partner>;
  @put
  @route("/{id}")
  Update(...Partner.Partner): BaseResponse<Partner.Partner>;
  @delete
  @route("/{id}")
  Delete(id: string): BaseResponse<Partner.Partner>;
}

model BaseResponse<T> {
  data: T;
}
