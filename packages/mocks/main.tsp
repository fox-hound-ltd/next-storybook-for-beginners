import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "./dashboard.tsp";
import "./employee.tsp";
import "./partner.tsp";
import "./aggregate.tsp";

using TypeSpec.Http;

@service({
  title: "Service",
})
namespace Service;

/**
 * ダッシュボードAPI
 */
@route("/v1/dashboard")
interface V1 {
  /**
   * 受注情報
   */
  @get
  @route("/order")
  Order(): BaseResponse<Dashboard.Order[]>;
  /**
   * 入金情報
   */
  @get
  @route("/deposit")
  Deposit(): BaseResponse<Dashboard.Deposit>;
  /**
   * 日時売上推移
   */
  @get
  @route("/chart")
  Chart(): BaseResponse<Dashboard.Chart>;
}

/**
 * 社員API
 */
@route("/v1/employee")
interface V1Employee {
  /**
   * 一覧取得
   */
  @get
  @route("/")
  List(): BaseResponse<Employee.Employee[]>;
  /**
   * 詳細取得
   */
  @get
  @route("/{id}")
  Get(id: string): BaseResponse<Employee.Employee>;
  /**
   * 登録
   */
  @post
  @route("/")
  Create(...Employee.CreateOrUpdate): BaseResponse<Employee.Employee>;
  /**
   * 更新
   */
  @put
  @route("/{id}")
  Update(...Employee.CreateOrUpdate): BaseResponse<Employee.Employee>;
  /**
   * 削除
   */
  @delete
  @route("/{id}")
  Delete(id: string): BaseResponse<Employee.Employee>;
}

/**
 * 協力会社API
 */
@route("/v1/partner")
interface V1Partner {
  /**
   * 一覧取得
   */
  @get
  @route("/")
  List(): BaseResponse<Partner.Partner[]>;
  /**
   * 詳細取得
   */
  @get
  @route("/{id}")
  Get(id: string): BaseResponse<Partner.Partner>;
  /**
   * 登録
   */
  @post
  @route("/")
  Create(...Partner.Partner): BaseResponse<Partner.Partner>;
  /**
   * 更新
   */
  @put
  @route("/{id}")
  Update(...Partner.Partner): BaseResponse<Partner.Partner>;
  /**
   * 削除
   */
  @delete
  @route("/{id}")
  Delete(id: string): BaseResponse<Partner.Partner>;
}

/**
 * 集計API
 */
@route("v1/aggregate")
interface V1Aggregate {
  /**
   * 夜間勤務集計
   */
  @get
  @route("/nightshift")
  NightShift(): BaseResponse<Aggregate.NightShift[]>;
  /**
   * 現場工数集計
   */
  @get
  @route("/manhour/{date}")
  ManHour(date: Shared.Date): BaseResponse<Aggregate.ManHour[]>;
  /**
   * 有給休暇集計
   */
  @get
  @route("/paidvacation")
  PaidVacation(): BaseResponse<Aggregate.PaidVacation[]>;
}

model BaseResponse<T> {
  data: T;
}
