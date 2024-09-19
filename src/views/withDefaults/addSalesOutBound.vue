<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="app-main-content addSpareProductList" style="display: flex;flex-direction: column;overflow-x: hidden;">
        <el-form
          ref="formBase"
          :model="formModelBase"
          label-position="top"
          :rules="formRulesBase"
          size="default"
        >
          <CustomHeader :title="$t('date20240302.jibxx')">
            <template #titleRight>
              <div style="display: flex; flex-direction: row;color: #252F3F;font-size: 14px;">
                <div style="margin-right: 32px;">{{ $t('date20240227.zhidrq') }}：{{ formModelBase.createDate }}</div>
                <div>{{ $t('date20240227.zhidr') }}：{{ formModelBase.createPersonName }}</div>
              </div>
            </template>
          </CustomHeader>
          <el-row :gutter="10" type="flex" style="flex-wrap:wrap">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.zhut')" prop="subject">
                <el-input
                  v-model="formModelBase.subject"
                  :placeholder="$t('date20240227.qingsr')"
                  size="small"
                  style="width: 100%;"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.yuandlx')" prop="sourceType">
                <el-select
                  v-model="formModelBase.sourceType"
                  :placeholder="$t('date20240227.qingxz')"
                  size="small"
                  style="width: 100%;"
                  @change="handleChangeSourceType"
                >
                  <el-option :value="2" :label="$t('route.salesSlip')" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.xdmethod')" prop="orderType">
                <el-select
                  v-model="formModelBase.orderType"
                  :placeholder="$t('date20240227.qingxz')"
                  size="small"
                  style="width: 100%;"
                  @change="handleChangeOrderType"
                >
                  <el-option :value="1" :label="$t('b_date20240403.zhengc')" />
                  <el-option :value="2" :label="$t('b_date20240403.taoj')" />
                  <el-option :value="3" :label="$t('b_date20240403.sanj')" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.kehulx')" prop="customerType">
                <el-select
                  v-model="formModelBase.customerType"
                  :placeholder="$t('date20240227.qingxz')"
                  size="small"
                  style="width: 100%;"
                  clearable
                  @change="changeChooseCustomerType"
                >
                  <el-option :value="1" :label="$t('z_date20240318.jingxs')" />
                  <el-option :value="2" :label="$t('b_date20240403.putong')" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.kehu')" prop="customerId">
                <ChooseCustomerSearch
                  :placeholder="$t('b_date20240403.kehu')"
                  :model-value.sync="formModelBase.customerId"
                  :search-parameter="{customerType: formModelBase.customerType}"
                  @changeChooseCustomerSearch="changeChooseCustomerSearch"
                />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.kehudh')" prop="customerPhone">
                <el-input
                  v-model="formModelBase.customerPhone"
                  :placeholder="$t('date20240227.qingsr')"
                  disabled
                  size="small"
                  style="width: 100%;"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.huogh')" prop="containerNumber">
                <el-input
                  v-model="formModelBase.containerNumber"
                  :placeholder="$t('date20240227.qingsr')"
                  size="small"
                  style="width: 100%;"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.ckpeople')" prop="outPersonId">
                <ChoosePersonnelSearch
                  :placeholder="$t('b_date20240403.ckpeople')"
                  :model-value.sync="formModelBase.outPersonId"
                  :search-parameter="{}"
                />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('z_date20240606.chukdx')" prop="targetType">
                <el-select
                  v-model="formModelBase.targetType"
                  :placeholder="$t('date20240227.qingxz')"
                  size="small"
                  style="width: 100%;"
                  clearable
                  @change="handleChangeType"
                >
                  <el-option :value="0" :label="$t('date20240227.cangk')" />
                  <el-option :value="1" :label="$t('date20240227.mend')" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('z_date20240411.cangk')" prop="repositoryId">
                <ChooseRepositorySearch :disabled="formModelBase.targetType !== 0" :placeholder="$t('z_date20240411.cangk')" :model-value.sync="formModelBase.repositoryId" :search-parameter="{}" @changeChooseRepositorySearch="changeChooseRepositorySearch" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item
                :label="$t('date20240403.mend')"
                prop="storeId"
              >
                <ChooseStoreSearch
                  :placeholder="$t('date20240227.qingxz')"
                  :model-value.sync="formModelBase.storeId"
                  :search-parameter="{ disabled: formModelBase.targetType !== 1 }"
                  @changeChooseStoreSearch="changeChooseStoreSearch"
                />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.bizhong')" prop="currencyType">
                <el-select
                  v-model="formModelBase.currencyType"
                  :placeholder="$t('date20240227.qingxz')"
                  size="small"
                  style="width: 100%;"
                  :readonly="formModelBase.sourceType === 2"
                  clearable
                  disabled
                  @change="handleChangeCurrency"
                >
                  <el-option
                    v-for="item in supplierCurrencyList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <!-- <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <el-form-item :label="$t('b_date20240403.ysmoney')" prop="shouldMoney">
                <el-input
                  v-model="formatterShouldMoney"
                  :placeholder="$t('date20240227.qingsr')"
                  readonly
                  size="small"
                  style="width: 100%;"
                  clearable
                />
              </el-form-item>
            </el-col> -->
          </el-row>
        </el-form>
        <el-divider size="mini" />
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane :label="$t('zhangjx.dingdmx')" name="0">
            <CustomHeader :title="$t('zhangjx.dingdmx')">
              <template #titleRight>
                <el-checkbox
                  v-model="showCodeAttrSourceOrder"
                  :true-label="1"
                  :false-label="2"
                  style="margin-right: 10px;"
                  @change="changeShowCodeAttrSourceOrder"
                >{{ $t('z_date202403134.xiansbmsxzd') }}</el-checkbox>
                <el-button
                  v-if="formModelBase.sourceType === 2"
                  size="small"
                  type="primary"
                  @click="handleAddSourceOrder"
                >{{ $t('b_date20240403.chooseyd') }}</el-button>
                <el-button
                  v-else
                  size="small"
                  type="primary"
                  @click="handleOpenProductDialog(true)"
                >{{ $t('z_date202403134.tianj') }}</el-button>
                <el-button v-if="formModelBase.orderType !== 1" @click="handleDelSourceOrder">{{ $t('z_date202403134.shanc') }}</el-button>
              </template>
            </CustomHeader>
            <CustomTable
              :id="'sourceOutBoundDetails'"
              ref="sourceOutBoundDetails"
              :scroll-y="{
                enabled:true
              }"
              border
              show-overflow
              show-header-overflow
              show-footer
              height="400"
              :data="sourceOrderTableData"
              :mouse-config="{selected: true}"
              :checkbox-config="{range: true}"
              :menu-config="tableMenu"
              :row-style="judgeRowStyle"
              :tooltip-config="tooltipConfig"
              :keyboard-config="{isArrow: true, isDel: false, isEnter: true, isTab: true, isEdit: true, isChecked: true}"
              :edit-config="{trigger: 'dblclick', mode: 'cell'}"
              :columns="sourceOrderTableColumn"
              :edit-rules="validRules"
              :resizable="true"

              :custom-config="customConfig"
              :other-config="otherConfig"
              :footer-method="getSummariesSourceOrder"
            />
          </el-tab-pane>
          <el-tab-pane :label="isKit ? $t('zhangjx.zhengcmx') : $t('zhangjx.chukmx')" name="1">
            <CustomHeader :title="isKit ? $t('zhangjx.zhengcmx') : $t('zhangjx.chukmx')">
              <template #titleRight>
                <el-checkbox
                  v-model="showCodeAttrStandardParts"
                  :true-label="1"
                  :false-label="2"
                  style="margin-right: 10px;"
                  @change="changeShowCodeAttrStandardParts"
                >{{ $t('z_date202403134.xiansbmsxzd') }}</el-checkbox>
              </template>
            </CustomHeader>
            <CustomTable
              :id="'standardPartsDetails'"
              ref="standardPartsDetails"
              border
              :scroll-y="{
                enabled:true
              }"
              show-overflow
              show-header-overflow
              show-footer
              height="400"
              :data="standardPartsTableData"
              :mouse-config="{selected: true}"
              :checkbox-config="{range: true}"
              :menu-config="tableMenu"
              :keyboard-config="{isArrow: true, isDel: false, isEnter: true, isTab: true, isEdit: true, isChecked: true}"
              :edit-config="{trigger: 'dblclick', mode: 'cell'}"
              :columns="standardPartsTableColumn"
              :edit-rules="validRules"
              :resizable="true"

              :custom-config="customConfig"
              :other-config="otherConfig"
              :footer-method="getSummariesSourceOrder"
            />
          </el-tab-pane>
          <!-- <el-tab-pane :label="$t('zhangjx.zengpmx')" name="2"> -->
          <el-tab-pane :label="$t('date20240403.suicfjmx')" name="2">
            <!-- <CustomHeader :title="$t('zhangjx.zengpmx')"> -->
            <CustomHeader :title="$t('date20240403.suicfjmx')">
              <template #titleRight>
                <el-checkbox
                  v-model="showCodeAttrGifts"
                  :true-label="1"
                  :false-label="2"
                  style="margin-right: 10px;"
                  @change="changeShowCodeAttrGifts"
                >{{ $t('z_date202403134.xiansbmsxzd') }}</el-checkbox>
                <el-button
                  v-if="shouldShowGiftButtons"
                  size="small"
                  type="primary"
                  @click="handleOpenProductDialog(false)"
                >{{ $t('z_date202403134.tianj') }}</el-button>
                <el-button v-if="shouldShowGiftButtons" @click="handleDel">{{ $t('z_date202403134.shanc') }}</el-button>
              </template>
            </CustomHeader>
            <CustomTable
              :id="'giftDetails'"
              ref="giftDetails"
              border
              :scroll-y="{
                enabled:true
              }"
              show-overflow
              show-header-overflow
              show-footer
              height="400"
              :data="giftsTableData"
              :mouse-config="{selected: true}"
              :checkbox-config="{range: true}"
              :menu-config="tableMenu"
              :keyboard-config="{isArrow: true, isDel: false, isEnter: true, isTab: true, isEdit: true, isChecked: true}"
              :edit-config="{trigger: 'dblclick', mode: 'cell'}"
              :columns="giftsTableColumn"
              :edit-rules="validRules"
              :resizable="true"

              :custom-config="customConfig"
              :other-config="otherConfig"
              :footer-method="getSummaries"
            />
          </el-tab-pane>
          <el-tab-pane v-if="isKit" :label="$t('zhangjx.biaozjmx')" name="3">
            <CustomHeader :title="$t('zhangjx.biaozjmx')">
              <template #titleRight>
                <el-checkbox
                  v-model="showCodeAttrFastener"
                  :true-label="1"
                  :false-label="2"
                  style="margin-right: 10px;"
                  @change="changeShowCodeAttrFastener"
                >{{ $t('z_date202403134.xiansbmsxzd') }}</el-checkbox>
              </template>
            </CustomHeader>
            <CustomTable
              :id="'fastenerTable'"
              ref="fastenerTable"
              border
              :scroll-y="{
                enabled:true
              }"
              show-overflow
              show-header-overflow
              show-footer
              height="400"
              :data="fastenerTableData"
              :mouse-config="{selected: true}"
              :checkbox-config="{range: true}"
              :menu-config="tableMenu"
              :keyboard-config="{isArrow: true, isDel: false, isEnter: true, isTab: true, isEdit: true, isChecked: true}"
              :edit-config="{trigger: 'dblclick', mode: 'cell'}"
              :columns="fastenerTableColumn"
              :edit-rules="validRules"
              :resizable="true"

              :custom-config="customConfig"
              :other-config="otherConfig"
              :footer-method="getSummaries"
            />
          </el-tab-pane>
          <el-tab-pane :label="$t('zhangjx.shouhmx')" name="4">
            <CustomHeader :title="$t('zhangjx.shouhmx')">
              <template #titleRight>
                <el-checkbox
                  v-model="showCodeAttrAfterSales"
                  :true-label="1"
                  :false-label="2"
                  style="margin-right: 10px;"
                  @change="changeShowCodeAttrAfterSales"
                >{{ $t('z_date202403134.xiansbmsxzd') }}</el-checkbox>
                <el-button
                  size="small"
                  type="primary"
                  @click="handleOpenProductDialog(false)"
                >{{ $t('z_date202403134.tianj') }}</el-button>
                <el-button @click="handleDel">{{ $t('z_date202403134.shanc') }}</el-button>
              </template>
            </CustomHeader>
            <CustomTable
              :id="'afterSalesDetails'"
              ref="afterSalesDetails"
              border
              :scroll-y="{
                enabled:true
              }"
              show-overflow
              show-header-overflow
              show-footer
              height="400"
              :data="afterSalesTableData"
              :mouse-config="{selected: true}"
              :checkbox-config="{range: true}"
              :menu-config="tableMenu"
              :keyboard-config="{isArrow: true, isDel: false, isEnter: true, isTab: true, isEdit: true, isChecked: true}"
              :edit-config="{trigger: 'dblclick', mode: 'cell'}"
              :columns="afterSalesTableColumn"
              :edit-rules="validRules"
              :resizable="true"

              :custom-config="customConfig"
              :other-config="otherConfig"
              :footer-method="getSummaries"
            />
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-divider size="mini" />
      <div class="buttons">
        <el-button @click="handleCancel">{{ $t('date20240227.qux') }}</el-button>
        <el-button type="primary" @click="handleSubmit">
          {{ $t('date20240227.baoc') }}
        </el-button>
      </div>

    </el-card>
    <el-dialog
      v-if="dialogVisible"
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :width="dialogWidth"
      :top="dialogTop"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :append-to-body="true"
      class="dialogClass"
    >
      <component
        :is="dialogContentComponent"
        :dialog-data="dialogData"
        :other-parameter="otherParameter"
        :echo-arr="echoArr"
        @closeDialog="closeDialog"
        @chooseProductData="chooseProductData"
        @chooseSaleOrderRadio="chooseSaleOrderRadio"
        @replaceModalRadio="replaceModalRadio"
      />
    </el-dialog>
    <single-manage-dialog
      :visible.sync="singleDialogVisible"
      :current-product="currentProduct"
      :repository-id="formModelBase.repositoryId"
      @finish="handleFinishSingleManage"
    />
  </div>
</template>
<script>
let _that
import { mapGetters } from 'vuex'
import { deepClone } from '@/utils/index'
import { dateLimit } from '@/views/mixins/dateLimit'
import { calcPrice } from '@/views/mixins/calcPrice'
import CustomHeader from '@/components/customComponents/CustomHeader.vue'
import CustomTable from '@/components/customComponents/CustomTable'
import { searchListClassify } from '@/api/basicManagement'
import { getCurrencyInfo } from '@/api/currencyManagement'
import { searchCodedAttribute } from '@/api/parameterConfig'
import ChooseProduct from '@/components/customComponents/ChooseProduct.vue'
import ChooseSalesOrder from './components/ChooseSalesOrder'
import ChooseCustomerSearch from '@/components/customComponents/ChooseCustomerSearch'
import ChoosePersonnelSearch from '@/components/customComponents/ChoosePersonnelSearch'
import ChooseRepositorySearch from '@/components/customComponents/ChooseRepositorySearch'
import SingleManageDialog from './components/SingleManageDialog'
import { getAccountSetDetailInfo } from '@/api/accountSet'
import { searchMaterialsList } from '@/api/productManagement'
import { searchListLocationAndBatch } from '@/api/inventoryManagement'
import { addSalesOutBound, updateSalesOutBound, getSalesOutBoundSee, getProductStockPrice, comboGetGiftV2 } from '@/api/salesManagement'
import ChooseStoreSearch from '@/components/customComponents/ChooseStoreSearch'
import ReplaceModal from '@/components/customComponents/ReplaceModal'
import { searchRepositoryList, searchStoreList } from '@/api/repositoryManagement'
export default {
  name: 'AddSalesOutBound',
  components: {
    SingleManageDialog,
    CustomHeader,
    CustomTable,
    ChooseProduct,
    ChooseCustomerSearch,
    ChoosePersonnelSearch,
    ChooseSalesOrder,
    ChooseRepositorySearch,
    ChooseStoreSearch,
    ReplaceModal
  },
  provide() {
    return {
      injectData: this.formModelBase.currencyType
    }
  },
  mixins: [dateLimit, calcPrice],
  data() {
    return {
      storeList: [],
      giftListIsNull: true,
      repositoryId1: '',
      tax: null, // 全局税率
      viewData: {
        fullPath: '/salesManagement/salesOutBound/addSalesOutBound',
        name: 'AddSalesOutBound',
        path: '/salesManagement/salesOutBound/addSalesOutBound',
        title: 'addSalesOutBound'
      },
      id: null,
      externalData: [], // 所有传的数据
      active: 0,
      sheetCreateDate: 'xxxx-xx-xx', // 制单时间
      sheetCreateMan: '张三', // 制单人
      sheetCreateManId: '',
      taxRateCal: '', // 税率
      // 表单字段--基础信息
      formModelBase: {
        createDate: this.getCreateDate(),
        createPersonId: this.$store.getters.userId,
        departmentId: this.$store.getters.userInfo.orgId,
        createPersonName: this.$store.getters.userInfo.userName,
        subject: '',
        sourceType: 2,
        orderType: 2,
        customerType: 1,
        customerId: null,
        customerPhone: null,
        containerNumber: null,
        outPersonId: this.$store.getters.userId,
        targetType: 0,
        repositoryId: null,
        storeId: null,
        currencyType: null,
        shouldMoney: 0,
        level: ''
      },
      // 验证规则--基础信息
      formRulesBase: {
        shouldMoney: [{ required: true, message: this.$t('date20240227.qingsr'), trigger: 'focus' }],
        containerNumber: [{ required: true, message: this.$t('date20240227.qingsr'), trigger: 'focus' }],
        customerType: [{ required: true, message: this.$t('date20240227.qingxz'), trigger: 'focus' }],
        customerId: [{ required: true, message: this.$t('date20240227.qingxz'), trigger: 'focus' }],
        outPersonId: [{ required: true, message: this.$t('date20240227.qingxz'), trigger: 'focus' }],
        targetType: [{ required: true, message: this.$t('date20240227.qingxz'), trigger: 'focus' }],
        currency: [{ required: true, message: this.$t('date20240227.qingxz'), trigger: 'focus' }],
        contactPersonName: [{ required: true, message: this.$t('date20240227.qingsr'), trigger: 'focus' }],
        contactPersonPhone: [{ required: true, message: this.$t('date20240227.qingsr'), trigger: 'focus' }],
        isEffective: [{ required: true, message: this.$t('date20240227.qingxz'), trigger: 'focus' }]
      },
      otherParameter: null,
      // 订单明细
      sourceOrderTableData: [],
      sourceOrderTableColumn: [
        {
          type: 'seq',
          width: 50,
          fixed: 'left'
        },
        {
          type: 'checkbox',
          width: 50,
          fixed: 'left'
        },
        {
          field: 'productCode',
          title: _that.$t('b_date20240403.wupbm'),
          slots: {
            default: ({ row }) => {
              if (!row.isBom && _that.isKit) {
                return [
                  <span><i class='el-icon-error'></i>{ row.productCode }</span>
                ]
              } else {
                return [
                  <span>{ row.productCode }</span>
                ]
              }
            }
          }
        },
        {
          field: 'productName',
          title: _that.$t('b_date20240403.wupmc')
        },
        {
          field: 'categoryName',
          title: _that.$t('b_date20240403.fengl')
        },
        {
          field: 'specification',
          title: _that.$t('b_date20240403.guig')
        },
        { field: 'matchType', title: _that.$t('date20240227.shiycx') },
        {
          field: 'unit',
          title: _that.$t('z_date202403134.danw')
        },
        {
          field: 'quantity',
          title: _that.$t('date20240227.shul'),
          editRender: { autofocus: '.vxe-input--inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <span>{ this.$formatQuantityDigit(row.quantity) } </span>
              ]
            },
            edit: ({ row }) => {
              if (_that.isKit) {
                return [
                  <vxe-input
                    type='float' size='small' style='width: 100%'
                    v-model={row.quantity} min={0} max={row.maxQuantity}
                    controls={false} digits={this.$quantityDigit}
                    onChange={() => _that.handleChangeKitQuantity(row.productId)}
                  >
                  </vxe-input>
                ]
              } else {
                return <span>{ this.$formatQuantityDigit(row.quantity) } </span>
              }
            }
          }
        },
        {
          field: 'price',
          title: _that.$t('b_date20240403.jichudj'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatPriceDigit(row.price) }</span>
              ]
            }
          }
        },
        {
          field: 'localPrice',
          title: _that.$t('b_date20240403.benwbjcdj'),
          minWidth: 120,
          visible: true,
          slots: {
            default: ({ row }) => {
              return [
                <span>
                  {this.translatePriceToBase(
                    row,
                    row.price,
                    this.isSameCurrency,
                    this.convertModeCal,
                    this.convertRateCal,
                    'localPrice'
                  )}
                </span>
              ]
            }
          }
        },
        {
          field: 'money',
          title: _that.$t('b_date20240403.jicje'),
          minWidth: 100,
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatMoneyDigit(this.calcMoney(row)) }</span>
              ]
            }
          }
        },
        {
          field: 'localMoney',
          title: _that.$t('b_date20240403.benwbjcje'),
          minWidth: 120,
          visible: true,
          slots: {
            default: ({ row }) => {
              return [
                <span>
                  {this.translateMoneyToBase(
                    row,
                    row.money,
                    this.isSameCurrency,
                    this.convertModeCal,
                    this.convertRateCal,
                    'localMoney'
                  )}
                </span>
              ]
            }
          }
        },
        {
          field: 'untaxMoney',
          title: _that.$t('b_date20240403.wsje'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatMoneyDigit(this.getUnTaxMoney(row)) }</span>
              ]
            }
          }
        },
        {
          field: 'localUntaxMoney',
          title: _that.$t('b_date20240403.benwbcjwsje'),
          visible: true,
          slots: {
            default: ({ row }) => {
              return [
                <span>
                  {this.translateMoneyToBase(
                    row,
                    row.untaxMoney,
                    this.isSameCurrency,
                    this.convertModeCal,
                    this.convertRateCal,
                    'localUntaxMoney'
                  )}
                </span>
              ]
            }
          }
        },
        {
          field: 'taxMoney',
          title: _that.$t('b_date20240403.chengjse'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatMoneyDigit(this.getTaxMoney(row)) }</span>
              ]
            }
          }
        },
        {
          field: 'localTaxMoney',
          title: _that.$t('b_date20240403.benwbcjse'),
          visible: true,
          slots: {
            default: ({ row }) => {
              return [
                <span>
                  {this.translateMoneyToBase(
                    row,
                    row.taxMoney,
                    this.isSameCurrency,
                    this.convertModeCal,
                    this.convertRateCal,
                    'localTaxMoney'
                  )}
                </span>
              ]
            }
          }
        },
        {
          field: 'discount',
          title: _that.$t('b_date20240403.jiczk'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatMoneyDigit(row.discount) }</span>
              ]
            }
          }
        },
        {
          field: 'temporaryDiscount',
          title: _that.$t('b_date20240403.linszk'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatMoneyDigit(row.temporaryDiscount) }</span>
              ]
            }
          }
        },
        {
          field: 'localTemporaryDiscount',
          title: _that.$t('b_date20240403.bwblinszk'),
          visible: true,
          slots: {
            default: ({ row }) => {
              return [
                <span>
                  {this.translateMoneyToBase(
                    row,
                    row.temporaryDiscount,
                    this.isSameCurrency,
                    this.convertModeCal,
                    this.convertRateCal,
                    'localTemporaryDiscount'
                  )}
                </span>
              ]
            }
          }
        },
        {
          field: 'afterDiscountPrice',
          title: _that.$t('b_date20240403.chengjdj'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatPriceDigit(row.afterDiscountPrice)}</span>
              ]
            }
          }
        },
        {
          field: 'localAfterDiscountPrice',
          title: _that.$t('b_date20240403.bwbcjdj'),
          visible: true,
          slots: {
            default: ({ row }) => {
              return [
                <span>
                  {this.translatePriceToBase(
                    row,
                    row.afterDiscountPrice,
                    this.isSameCurrency,
                    this.convertModeCal,
                    this.convertRateCal,
                    'localAfterDiscountPrice'
                  )}
                </span>
              ]
            }
          }
        },
        {
          field: 'afterDiscountMoney',
          title: _that.$t('b_date20240403.chengjje'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatPriceDigit(this.getADM(row)) }</span>
              ]
            }
          }
        },
        {
          field: 'localAfterDiscountMoney',
          title: _that.$t('b_date20240403.bwbcjje'),
          visible: true,
          slots: {
            default: ({ row }) => {
              return [
                <span>
                  {this.translateMoneyToBase(
                    row,
                    row.afterDiscountMoney,
                    this.isSameCurrency,
                    this.convertModeCal,
                    this.convertRateCal,
                    'localAfterDiscountMoney'
                  )}
                </span>
              ]
            }
          }
        },
        {
          field: 'sourceNumber',
          title: _that.$t('b_date20240403.ydnunber')
        }
      ],
      // 标准件明细/出库明细
      standardPartsTableData: [],
      standardPartsTableColumn: [
        {
          type: 'seq',
          width: 50,
          fixed: 'left'
        },
        {
          type: 'checkbox',
          width: 50,
          fixed: 'left'
        },
        {
          field: 'customField',
          title: _that.$t('date20240227.caoz'),
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <div>
                  <el-button
                    size='mini'
                    type='primary'
                    disabled={ !row.uuid }
                    onClick={() => this.openReplace(row, 'standardPartsTableColumn')}
                    style='margin-right:8px;'
                  >
                    {_that.$t('date20240227.tih')}
                  </el-button>
                </div>
              ]
            }
          }
        },
        {
          field: 'inventoryQuantity',
          title: _that.$t('z_date20240606.xianykc')
        },
        {
          field: 'productCode',
          title: _that.$t('b_date20240403.wupbm')
        },
        {
          field: 'productName',
          title: _that.$t('b_date20240403.wupmc')
        },
        {
          field: 'categoryName',
          title: _that.$t('b_date20240403.fengl')
        },
        {
          field: 'specification',
          title: _that.$t('b_date20240403.guig')
        },
        { field: 'matchType', title: _that.$t('date20240227.shiycx') },
        {
          field: 'repositoryId',
          title: _that.$t('date20240227.cangk'),
          editRender: { autofocus: '.el-input__inner' },
          visible: false,
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <el-select
                  v-model={row.repositoryId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.repositoryList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.repositoryName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            },
            edit: ({ row }) => {
              return [
                <el-select
                  v-model={row.repositoryId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.repositoryList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.repositoryName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            }
          }
        },
        {
          field: 'storeId',
          title: _that.$t('date20240227.mend'),
          editRender: { autofocus: '.el-input__inner' },
          visible: false,
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <el-select
                  v-model={row.storeId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.storeList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.storeName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            },
            edit: ({ row }) => {
              return [
                <el-select
                  v-model={row.storeId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.storeList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.storeName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            }
          }
        },
        {
          field: 'unit',
          title: _that.$t('z_date202403134.danw')
        },
        {
          field: 'areaName',
          title: _that.$t('b_date20240403.kuqu')
        },
        {
          field: 'locationName',
          title: _that.$t('b_date20240403.huowei')
        },
        // {
        //   field: 'costPrice',
        //   title: _that.$t('date20240227.chengbj')
        // },
        // {
        //   field: 'costMoney',
        //   title: _that.$t('b_date20240403.cbje'),
        //   slots: {
        //     default: ({ row }) => {
        //       return [
        //         <span>{ this.$formatMoneyDigit(this.getCostMoney(row)) }</span>
        //       ]
        //     }
        //   }
        // },
        {
          field: 'stockPrice',
          title: _that.$t('date20240227.caigj'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatPriceDigit(row.stockPrice) }</span>
              ]
            }
          }
        },
        {
          field: 'outQuantity',
          title: _that.$t('date20240227.shul'),
          editRender: { autofocus: '.vxe-input--inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              if (!_that.isKit) {
                return [
                  <span>{ this.$formatQuantityDigit(row.outQuantity) } </span>
                ]
              } else {
                return [
                  <span>{ this.$formatQuantityDigit(row.outQuantity) } </span>
                ]
              }
            },
            edit: ({ row }) => {
              if (!_that.isKit) {
                return [
                  <vxe-input
                    type='float' size='small' style='width: 100%'
                    v-model={ row.outQuantity } min={0} max={row.quantity}
                    controls={false} digits={this.$quantityDigit}
                    onChange={() => _that.handleChangeVehicleOrPartsQuantity(row)}
                  >
                  </vxe-input>
                ]
              } else {
                return <span>{ this.$formatQuantityDigit(row.outQuantity) } </span>
              }
            }
          }
        },
        {
          field: 'increaseValue',
          title: _that.$t('b_date20240403.jiajxs')
        },
        {
          field: 'stockMoney',
          title: _that.$t('date20240227.jine'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatMoneyDigit(this.getStockMoney(row)) }</span>
              ]
            }
          }
        },
        {
          field: 'isSingle',
          title: _that.$t('b_date20240403.weiyh'),
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              if (row.isSingle === 1) {
                return [
                  <el-button type='text' size='mini' onClick={() => this.handleOpenSingeDialog(row)}> { _that.$t('zhangjx.guanl') } </el-button>
                ]
              } else {
                return [
                  <span>{ _that.$t('zhangjx.wuwyh') } </span>
                ]
              }
            }
          }
        },
        {
          field: 'uuid',
          title: 'uuid'
        }
      ],
      // 随车赠品明细
      giftsTableData: [],
      giftsTableColumn: [
        {
          type: 'seq',
          width: 50,
          fixed: 'left'
        },
        {
          type: 'checkbox',
          width: 50,
          fixed: 'left'
        },
        {
          field: 'customField',
          title: _that.$t('date20240227.caoz'),
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <div>
                  <el-button
                    size='mini'
                    type='primary'
                    disabled={ !row.uuid }
                    onClick={() => this.openReplace(row, 'giftsTableColumn')}
                    style='margin-right:8px;'
                  >
                    {_that.$t('date20240227.tih')}
                  </el-button>
                </div>
              ]
            }
          }
        },
        {
          field: 'inventoryQuantity',
          title: _that.$t('z_date20240606.xianykc')
        },
        {
          field: 'productCode',
          title: _that.$t('b_date20240403.wupbm')
        },
        {
          field: 'productName',
          title: _that.$t('b_date20240403.wupmc')
        },
        {
          field: 'categoryName',
          title: _that.$t('b_date20240403.fengl')
        },
        {
          field: 'specification',
          title: _that.$t('b_date20240403.guig')
        },
        { field: 'matchType', title: _that.$t('date20240227.shiycx') },
        {
          field: 'unit',
          title: _that.$t('z_date202403134.danw')
        },
        {
          field: 'repositoryId',
          title: _that.$t('date20240227.cangk'),
          visible: false,
          editRender: { autofocus: '.el-input__inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <el-select
                  v-model={row.repositoryId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.repositoryList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.repositoryName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            },
            edit: ({ row }) => {
              return [
                <el-select
                  v-model={row.repositoryId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.repositoryList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.repositoryName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            }
          }
        },
        {
          field: 'storeId',
          title: _that.$t('date20240227.mend'),
          visible: false,
          editRender: { autofocus: '.el-input__inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <el-select
                  v-model={row.storeId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.storeList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.storeName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            },
            edit: ({ row }) => {
              return [
                <el-select
                  v-model={row.storeId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.storeList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.storeName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            }
          }
        },
        {
          field: 'areaName',
          title: _that.$t('b_date20240403.kuqu')
        },
        {
          field: 'locationName',
          title: _that.$t('b_date20240403.huowei')
        },
        // {
        //   field: 'costPrice',
        //   title: _that.$t('date20240227.chengbj')
        // },
        // {
        //   field: 'costMoney',
        //   title: _that.$t('b_date20240403.cbje'),
        //   slots: {
        //     default: ({ row }) => {
        //       return [
        //         <span>{ this.$formatMoneyDigit(this.getCostMoney(row)) }</span>
        //       ]
        //     }
        //   }
        // },
        {
          field: 'stockPrice',
          title: _that.$t('date20240227.caigj'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatPriceDigit(row.stockPrice) }</span>
              ]
            }
          }
        },
        {
          field: 'outQuantity',
          title: _that.$t('date20240227.shul'),
          editRender: { autofocus: '.vxe-input--inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <span>{ this.$formatQuantityDigit(row.outQuantity) } </span>
              ]
            },
            edit: ({ row }) => {
              return [
                <vxe-input
                  type='float' size='small' style='width: 100%'
                  v-model={ row.outQuantity } min={0}
                  controls={false} digits={this.$quantityDigit}
                  onChange={() => this.handleGiftOutQuantityChange(row)}
                >
                </vxe-input>
              ]
            }
          }
        },
        {
          field: 'increaseValue',
          title: _that.$t('b_date20240403.jiajxs')
        },
        {
          field: 'stockMoney',
          title: _that.$t('date20240227.jine'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatMoneyDigit(this.getStockMoney(row)) }</span>
              ]
            }
          }
        },
        {
          field: 'isSingle',
          title: _that.$t('b_date20240403.weiyh'),
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              if (row.isSingle === 1) {
                return [
                  <el-button type='text' size='mini' onClick={() => this.handleOpenSingeDialog(row)}> { _that.$t('zhangjx.guanl') } </el-button>
                ]
              } else {
                return [
                  <span>{ _that.$t('zhangjx.wuwyh') } </span>
                ]
              }
            }
          }
        },
        {
          field: 'uuid',
          title: 'uuid'
        }
      ],
      // 紧固件明细
      fastenerTableData: [],
      fastenerTableColumn: [
        {
          type: 'seq',
          width: 50,
          fixed: 'left'
        },
        {
          type: 'checkbox',
          width: 50,
          fixed: 'left'
        },
        {
          field: 'customField',
          title: _that.$t('date20240227.caoz'),
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <div>
                  <el-button
                    size='mini'
                    type='primary'
                    disabled={ !row.uuid }
                    onClick={() => this.openReplace(row, 'fastenerTableColumn')}
                    style='margin-right:8px;'
                  >
                    {_that.$t('date20240227.tih')}
                  </el-button>
                </div>
              ]
            }
          }
        },
        {
          field: 'inventoryQuantity',
          title: _that.$t('z_date20240606.xianykc')
        },
        {
          field: 'productCode',
          title: _that.$t('b_date20240403.wupbm')
        },
        {
          field: 'productName',
          title: _that.$t('b_date20240403.wupmc')
        },
        {
          field: 'categoryName',
          title: _that.$t('b_date20240403.fengl')
        },
        {
          field: 'specification',
          title: _that.$t('b_date20240403.guig')
        },
        { field: 'matchType', title: _that.$t('date20240227.shiycx') },
        {
          field: 'unit',
          title: _that.$t('z_date202403134.danw')
        },
        {
          field: 'repositoryId',
          title: _that.$t('date20240227.cangk'),
          visible: false,
          editRender: { autofocus: '.el-input__inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <el-select
                  v-model={row.repositoryId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.repositoryList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.repositoryName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            },
            edit: ({ row }) => {
              return [
                <el-select
                  v-model={row.repositoryId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.repositoryList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.repositoryName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            }
          }
        },
        {
          field: 'storeId',
          title: _that.$t('date20240227.mend'),
          visible: false,
          editRender: { autofocus: '.el-input__inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <el-select
                  v-model={row.storeId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.storeList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.storeName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            },
            edit: ({ row }) => {
              return [
                <el-select
                  v-model={row.storeId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.storeList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.storeName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            }
          }
        },
        {
          field: 'areaName',
          title: _that.$t('b_date20240403.kuqu')
        },
        {
          field: 'locationName',
          title: _that.$t('b_date20240403.huowei')
        },
        // {
        //   field: 'costPrice',
        //   title: _that.$t('date20240227.chengbj')
        // },
        // {
        //   field: 'costMoney',
        //   title: _that.$t('b_date20240403.cbje'),
        //   slots: {
        //     default: ({ row }) => {
        //       return [
        //         <span>{ this.$formatMoneyDigit(this.getCostMoney(row)) }</span>
        //       ]
        //     }
        //   }
        // },
        {
          field: 'stockPrice',
          title: _that.$t('date20240227.caigj'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatPriceDigit(row.stockPrice) }</span>
              ]
            }
          }
        },
        {
          field: 'outQuantity',
          title: _that.$t('date20240227.shul'),
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <span>{ this.$formatQuantityDigit(row.outQuantity) } </span>
              ]
            }
          }
        },
        {
          field: 'increaseValue',
          title: _that.$t('b_date20240403.jiajxs')
        },
        {
          field: 'stockMoney',
          title: _that.$t('date20240227.jine'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatMoneyDigit(this.getStockMoney(row)) }</span>
              ]
            }
          }
        },
        {
          field: 'isSingle',
          title: _that.$t('b_date20240403.weiyh'),
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              if (row.isSingle === 1) {
                return [
                  <el-button type='text' size='mini' onClick={() => this.handleOpenSingeDialog(row)}> { _that.$t('zhangjx.guanl') } </el-button>
                ]
              } else {
                return [
                  <span>{ _that.$t('zhangjx.wuwyh') } </span>
                ]
              }
            }
          }
        },
        {
          field: 'uuid',
          title: 'uuid'
        }
      ],
      // 售后明细
      afterSalesTableData: [],
      afterSalesTableColumn: [
        {
          type: 'seq',
          width: 50,
          fixed: 'left'
        },
        {
          type: 'checkbox',
          width: 50,
          fixed: 'left'
        },
        // {
        //   field: 'customField',
        //   title: _that.$t('date20240227.caoz'),
        //   slots: {
        //     // 使用 JSX 渲染
        //     default: ({ row }) => {
        //       return [
        //         <div>
        //           <el-button
        //             size='mini'
        //             type='primary'
        //             disabled={ !row.uuid }
        //             onClick={() => this.openReplace(row, 'afterSalesTableColumn')}
        //             style='margin-right:8px;'
        //           >
        //             {_that.$t('date20240227.tih')}
        //           </el-button>
        //         </div>
        //       ]
        //     }
        //   }
        // },
        {
          field: 'inventoryQuantity',
          title: _that.$t('z_date20240606.xianykc')
        },
        {
          field: 'productCode',
          title: _that.$t('b_date20240403.wupbm')
        },
        {
          field: 'productName',
          title: _that.$t('b_date20240403.wupmc')
        },
        {
          field: 'categoryName',
          title: _that.$t('b_date20240403.fengl')
        },
        {
          field: 'specification',
          title: _that.$t('b_date20240403.guig')
        },
        { field: 'matchType', title: _that.$t('date20240227.shiycx') },
        {
          field: 'unit',
          title: _that.$t('z_date202403134.danw')
        },
        {
          field: 'repositoryId',
          title: _that.$t('date20240227.cangk'),
          visible: false,
          editRender: { autofocus: '.el-input__inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <el-select
                  v-model={row.repositoryId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.repositoryList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.repositoryName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            },
            edit: ({ row }) => {
              return [
                <el-select
                  v-model={row.repositoryId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.repositoryList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.repositoryName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            }
          }
        },
        {
          field: 'storeId',
          title: _that.$t('date20240227.mend'),
          visible: false,
          editRender: { autofocus: '.el-input__inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <el-select
                  v-model={row.storeId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.storeList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.storeName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            },
            edit: ({ row }) => {
              return [
                <el-select
                  v-model={row.storeId}
                  placeholder={this.$t('date20240227.qingxz')}
                  style='width: 100%'
                  size='mini'
                  onChange={() => { this.changeRepositoryId(row) }}
                  clearable
                >
                  {this.storeList.map((item) => {
                    return (
                      <el-option
                        key={item.id}
                        label={item.storeName}
                        value={item.id}
                      />
                    )
                  })}
                </el-select>
              ]
            }
          }
        },
        {
          field: 'areaName',
          title: _that.$t('b_date20240403.kuqu')
        },
        {
          field: 'locationName',
          title: _that.$t('b_date20240403.huowei')
        },
        // {
        //   field: 'costPrice',
        //   title: _that.$t('date20240227.chengbj')
        // },
        // {
        //   field: 'costMoney',
        //   title: _that.$t('b_date20240403.cbje'),
        //   slots: {
        //     default: ({ row }) => {
        //       return [
        //         <span>{ this.$formatMoneyDigit(this.getCostMoney(row)) }</span>
        //       ]
        //     }
        //   }
        // },
        {
          field: 'stockPrice',
          title: _that.$t('date20240227.caigj'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatPriceDigit(row.stockPrice) }</span>
              ]
            }
          }
        },
        {
          field: 'outQuantity',
          title: _that.$t('date20240227.shul'),
          editRender: { autofocus: '.vxe-input--inner' },
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              return [
                <span>{ this.$formatQuantityDigit(row.outQuantity) } </span>
              ]
            },
            edit: ({ row }) => {
              return [
                <vxe-input
                  type='float' size='small' style='width: 100%'
                  v-model={ row.outQuantity } min={0}
                  controls={false} digits={this.$quantityDigit}
                >
                </vxe-input>
              ]
            }
          }
        },
        {
          field: 'increaseValue',
          title: _that.$t('b_date20240403.jiajxs')
        },
        {
          field: 'stockMoney',
          title: _that.$t('date20240227.jine'),
          slots: {
            default: ({ row }) => {
              return [
                <span>{ this.$formatMoneyDigit(this.getStockMoney(row)) }</span>
              ]
            }
          }
        },
        {
          field: 'isSingle',
          title: _that.$t('b_date20240403.weiyh'),
          slots: {
            // 使用 JSX 渲染
            default: ({ row }) => {
              if (row.isSingle === 1) {
                return [
                  <el-button type='text' size='mini' onClick={() => this.handleOpenSingeDialog(row)}> { _that.$t('zhangjx.guanl') } </el-button>
                ]
              } else {
                return [
                  <span>{ _that.$t('zhangjx.wuwyh') } </span>
                ]
              }
            }
          }
        }
        // {
        //   field: 'uuid',
        //   title: 'uuid'
        // }
      ],
      validRules: {
        repositoryAreaId: [
          {
            required: true,
            message: this.$t('date20240227.youbtnrwt'),
            trigger: 'change'
          }
        ],
        locationId: [
          {
            required: true,
            message: this.$t('date20240227.youbtnrwt'),
            trigger: 'change'
          }
        ],
        areaName: [
          {
            required: true,
            message: this.$t('date20240227.youbtnrwt'),
            trigger: 'change'
          }
        ],
        locationName: [
          {
            required: true,
            message: this.$t('date20240227.youbtnrwt'),
            trigger: 'change'
          }
        ]
      },
      tableMenu: {
        body: {
          options: []
        }
      },
      tooltipConfig: {
        showAll: true,
        enterable: true,
        contentMethod: ({ type, column, row, items, _columnIndex }) => {
          const { field } = column
          if (field === 'productCode') {
            if (type === 'header') {
              return column.title ? column.title : ''
            } else if (type === 'footer') {
              return items[_columnIndex] ? items[_columnIndex] : ''
            }
            // 重写默认的提示内容
            if (!row?.isBom && _that.isKit) {
              return _that.$t('zhangjx.dangqwlbsb')
            }
          }
          // 其余的单元格使用默认行为
          return null
        }
      },
      tableToolbar: {
        custom: {
          trigger: 'click',
          immediate: false,
          allowFixed: false,
          confirmButtonText: _that.$t('date20240227.quer'),
          resetButtonText: _that.$t('date20240227.chongz')
        },
        slots: {
          buttons: 'toolbar_buttons'
        }
      },
      customConfig: {
        storage: {
          visible: true,
          resizable: true,
          fixed: true
        }
      },
      otherConfig: {
        isDrag: true// 表头是否可拖拽
      },
      // 是否添加来源物料
      isSource: false,
      // 弹窗组件设置
      dialogTop: '15vh',
      dialogWidth: '50%', // 弹窗宽度
      dialogTitle: '提示', // 弹窗的title
      dialogContentComponent: null, // 弹窗显示的组件
      dialogData: {}, // 传给弹窗的数据
      dialogVisible: false, // 控制弹窗显隐
      // 唯一号弹窗
      singleDialogVisible: false,
      // 下拉列表
      supplierCategoryList: [],
      supplierCurrencyList: [],
      // 套件中  订单-标准件-随车-紧固件-售后
      // 订单明细
      attrListSourceOrder: [],
      showCodeAttrSourceOrder: 2,
      // 标准件明细
      attrListStandardParts: [],
      showCodeAttrStandardParts: 2,
      // 随车赠品明细
      attrListGifts: [],
      showCodeAttrGifts: 2,
      // 赠品出库明细
      attrListGiftsOut: [],
      showCodeAttrGiftsOut: 2,
      // 紧固件赠品明细
      attrListFastener: [],
      showCodeAttrFastener: 2,
      // 售后明细
      attrListAfterSales: [],
      showCodeAttrAfterSales: 2,
      // 整车/散件中  订单-出库-随车赠-售后
      // 出库明细
      attrListOutBound: [],
      showCodeAttrOutBound: 2,
      // 整车/散件中随车赠明细
      attrListWholeGifts: [],
      showCodeAttrWholeGifts: 2,
      echoArr: [],
      // tabs切换
      activeName: '0', // 套件控制
      isKit: true, // 下单方式是否是套件
      // 编辑唯一号物料
      currentProduct: null,
      // 页面操作属性
      pageType: 'add',
      currentRow: {},
      openReplaceType: '',
      repositoryList: []
    }
  },
  computed: {
    ...mapGetters(['userId', 'userInfo']),
    isSameCurrency() {
      return Number(this.formModelBase.currencyType) === Number(this.$store.getters.userInfo.currencyId)
    },
    shouldShowGiftButtons() {
      if (this.isKit) {
        // 如果是套件模式，不显示按钮
        return false
      } else if (this.formModelBase.orderType === 1) {
        // 如果是整车模式，当有随车附件明细时显示按钮
        return this.giftListIsNull
      } else {
        // 如果是散件模式，始终显示按钮
        return true
      }
    }
    // formatterShouldMoney() {
    //   console.log(this.formModelBase.shouldMoney)
    //   return this.$formatMoneyDigit(this.formModelBase.shouldMoney)
    // }
  },
  watch: {},
  beforeCreate() {
    _that = this
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log('vm====', vm)
      // 每次进入路由执行
      // 新建
      if (_that.$route.query.type === 'add') {
        const view = {
          fullPath: '/salesManagement/salesOutBound/addSalesOutBound',
          name: 'AddSalesOutBound',
          path: '/salesManagement/salesOutBound/addSalesOutBound',
          title: 'addSalesOutBound'
        }
        _that.$store.dispatch('tagsView/updateVisitedView', view)
        _that.pageType = 'add'
      }
      // 编辑
      if (_that.$route.query.type === 'edit') {
        const view = {
          fullPath: '/salesManagement/salesOutBound/addSalesOutBound',
          name: 'AddSalesOutBound',
          path: '/salesManagement/salesOutBound/addSalesOutBound',
          title: 'editSalesOutBound'
        }
        _that.$store.dispatch('tagsView/updateVisitedView', view)
        _that.pageType = 'edit'
        _that.id = _that.$route.query.id
        _that.$nextTick(() => {
          _that.getEditData()
        })
      }
    })
  },
  created() {
    this.getStoreList()
    this.getRepositoryListData()
    this.getSearchListClassify()
    this.getSearchListCurrency()
  },
  mounted() {
    this.setBaseVisible1()
  },
  methods: {
    async changeRepositoryId(row) {
      let repositoryId
      if (this.formModelBase.targetType === 0) {
        repositoryId = row.repositoryId
      } else if (this.formModelBase.targetType === 1) {
        repositoryId = row.repositoryId
      }

      try {
        const result = await searchListLocationAndBatch({
          measurementType: 2,
          productId: row.productId,
          repositoryId: repositoryId
        })

        // 处理接口返回的结果

        if (result.data.ret === 200 && result.data.data.content) {
          const content = result.data.data.content

          // 更新 areaName 和 locationName
          this.$set(row, 'areaName', content.areaName || '')
          this.$set(row, 'areaName', content.areaName || '')
          this.$set(row, 'locationName', content.locationName || '')
          this.$set(row, 'locationId', content.locationId || '')

          // 计算并更新 inventoryQuantity
          this.$set(row, 'inventoryQuantity', content.partInventoryVos && Array.isArray(content.partInventoryVos)
            ? content.partInventoryVos.reduce((sum, item) => sum + (item.quantity || 0), 0)
            : 0
          )
        }

        // 根据需要更新其他数据或状态
      } catch (error) {
        console.error('调用 searchListLocationAndBatch 接口出错:', error)
      }
    },
    setBaseVisible1() {
      switch (this.formModelBase.targetType) {
        case 0:
          [9].forEach((item) => {
            this.standardPartsTableColumn[item].visible = true
            this.afterSalesTableColumn[item].visible = true
          });
          [10].forEach((item) => {
            this.standardPartsTableColumn[item].visible = false
            this.giftsTableColumn[item].visible = true
            this.fastenerTableColumn[item].visible = true
            this.afterSalesTableColumn[item].visible = false
          });
          [11].forEach((item) => {
            this.giftsTableColumn[item].visible = false
            this.fastenerTableColumn[item].visible = false
          })
          this.$refs.standardPartsDetails.$refs.customTable.loadColumn(
            this.standardPartsTableColumn
          )
          this.$refs.giftDetails.$refs.customTable.loadColumn(
            this.giftsTableColumn
          )
          this.$refs.fastenerTable.$refs.customTable.loadColumn(
            this.fastenerTableColumn
          )
          this.$refs.afterSalesDetails.$refs.customTable.loadColumn(
            this.afterSalesTableColumn
          )
          break
        case 1:
          [9].forEach((item) => {
            this.standardPartsTableColumn[item].visible = false
            this.afterSalesTableColumn[item].visible = false
          });
          [10].forEach((item) => {
            this.standardPartsTableColumn[item].visible = true
            this.giftsTableColumn[item].visible = false
            this.fastenerTableColumn[item].visible = false
            this.afterSalesTableColumn[item].visible = true
          });
          [11].forEach((item) => {
            this.giftsTableColumn[item].visible = true
            this.fastenerTableColumn[item].visible = true
          })
          this.$refs.standardPartsDetails.$refs.customTable.loadColumn(
            this.standardPartsTableColumn
          )
          this.$refs.giftDetails.$refs.customTable.loadColumn(
            this.giftsTableColumn
          )
          this.$refs.fastenerTable.$refs.customTable.loadColumn(
            this.fastenerTableColumn
          )
          this.$refs.afterSalesDetails.$refs.customTable.loadColumn(
            this.afterSalesTableColumn
          )
          break
        default:
          break
      }
    },
    getStoreList() {
      searchStoreList({
        pageNum: 1,
        pageSize: 999,
        isActive: 1
      }).then(res => {
        if (res.data.ret === 200) {
          this.storeList = res.data.data.content.list.map(item => {
            return {
              label: item.storeName,
              value: item.id,
              ...item
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })
    },
    getRepositoryListData() {
      searchRepositoryList({
        pageNum: 1,
        pageSize: 9999,
        isActive: 1
      }).then(res => {
        if (res.data.ret === 200) {
          this.repositoryList = res.data.data.content.list
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })
    },
    handleGiftOutQuantityChange(row) {
      console.log('this.giftsTableData666 :>> ', this.giftsTableData)

      const newOutQuantity = Number(row.outQuantity)
      let showWarning = false
      let warningMessage = ''

      // 找到所有具有相同 groupId 的赠品
      const sameGroupGifts = this.giftsTableData.filter(gift =>
        gift.groupId === row.groupId && gift.mainProductId === row.mainProductId
      )

      // 计算同组赠品的总数量
      const totalGroupQuantity = sameGroupGifts.reduce((sum, gift) => {
        return sum + (gift === row ? newOutQuantity : Number(gift.outQuantity))
      }, 0)

      // 检查是否超过了最大允许数量
      if (totalGroupQuantity > row.maxQuantity) {
        row.outQuantity = 0
        showWarning = true

        // 生成相关赠品的列表字符串
        const relatedGiftsStr = sameGroupGifts
          .map(gift => `${gift.productCode} ${gift.productName}`)
          .join('、')

        warningMessage = `与主物品 ${row.mainProductName} 相关赠品 ${relatedGiftsStr} 相加超过了最大允许出库数 ${row.maxQuantity}，当前赠品 ${row.productCode} ${row.productName} 已重置为0`
      } else {
        row.outQuantity = newOutQuantity
      }

      // 更新 giftsTableData
      this.giftsTableData = [...this.giftsTableData]

      // 只在需要时显示一次警告
      if (showWarning) {
        this.$message.warning(warningMessage)
      }
    },
    changeChooseStoreSearch(data) {
      this.repositoryId1 = data.repositoryId
      this.sourceOrderTableData = []
      this.standardPartsTableData = []
      this.giftsTableData = []
      this.afterSalesTableData = []
      this.formModelBase.shouldMoney = 0
    },
    async replaceModalRadio(data) {
      this.$loads.show()
      const newData = deepClone(data)

      await getProductStockPrice({ productIds: newData.productId }).then(res => {
        if (res.data.ret === 200) {
          const newObj = res.data.data.content.find(Obj => Obj.productId === newData.productId)
          newData.stockPrice = this.currencyPriceTranslate(
            newObj.stockPrice,
            this.isSameCurrency,
            this.convertModeCal,
            this.convertRateCal
          )
          newData.increaseValue = newObj.increaseValue || 0
        }
      })

      await searchListLocationAndBatch({
        measurementType: 2,
        productId: newData.productId,
        repositoryId: this.formModelBase.targetType === 0 ? this.formModelBase.repositoryId : this.repositoryId1
        // repositoryId: this.formModelBase.repositoryId
      }).then(res => {
        if (res.data.ret === 200) {
          this.$set(newData, 'repositoryAreaId', res.data.data.content.repositoryAreaId)
          this.$set(newData, 'locationId', res.data.data.content.locationId)
          this.$set(newData, 'locationName', res.data.data.content.locationName)
          this.$set(newData, 'areaName', res.data.data.content.areaName)
          this.$set(newData, 'inventoryQuantity', res.data.data.content.partInventoryVos
            ? res.data.data.content.partInventoryVos.quantity : 0)
        }
      })
      if (this.openReplaceType === 'afterSalesTableColumn') {
        this.afterSalesTableData.forEach(item => {
          if (item.productCode === this.currentRow.productCode && item.uuid === this.currentRow.uuid) {
            item.productId = newData.productId
            item.productName = newData.productName
            item.productCode = newData.productCode
            item.categoryName = newData.categoryName
            item.inventoryQuantity = newData.inventoryQuantity
            item.specification = newData.specification
            item.matchType = newData.matchType
            item.unit = item.saleMeasurementName || item.purchaseMeasurementName
            item.isSingle = newData.isSingle
            item.singleNumbers = newData.isSingle === 1 ? item.singleNumbers : null
            item.p1name = newData.p1name
            item.p2name = newData.p2name
            item.p3name = newData.p3name
            item.p4name = newData.p4name
            item.p5name = newData.p5name
            item.p6name = newData.p6name
            item.p7name = newData.p7name
            item.p8name = newData.p8name
            item.stockPrice = newData.stockPrice
            item.increaseValue = newData.increaseValue
            item.sourcePrice = newData.price
            item.price = newData.price
            item.costPrice = newData.costPrice
            item.repositoryAreaId = newData.repositoryAreaId
            item.locationId = newData.locationId
            item.locationName = newData.locationName
            item.areaName = newData.areaName
          }
        })
      }
      if (this.openReplaceType === 'fastenerTableColumn') {
        this.fastenerTableData.forEach(item => {
          if (item.productCode === this.currentRow.productCode && item.uuid === this.currentRow.uuid) {
            item.productId = newData.productId
            item.productName = newData.productName
            item.productCode = newData.productCode
            item.categoryName = newData.categoryName
            item.inventoryQuantity = newData.inventoryQuantity
            item.specification = newData.specification
            item.matchType = newData.matchType
            item.unit = item.saleMeasurementName || item.purchaseMeasurementName
            item.isSingle = newData.isSingle
            item.singleNumbers = newData.isSingle === 1 ? item.singleNumbers : null
            item.p1name = newData.p1name
            item.p2name = newData.p2name
            item.p3name = newData.p3name
            item.p4name = newData.p4name
            item.p5name = newData.p5name
            item.p6name = newData.p6name
            item.p7name = newData.p7name
            item.p8name = newData.p8name
            item.stockPrice = newData.stockPrice
            item.increaseValue = newData.increaseValue
            item.sourcePrice = newData.price
            item.price = newData.price
            item.costPrice = newData.costPrice
            item.repositoryAreaId = newData.repositoryAreaId
            item.locationId = newData.locationId
            item.locationName = newData.locationName
            item.areaName = newData.areaName
          }
        })
      }
      if (this.openReplaceType === 'giftsTableColumn') {
        this.giftsTableData.forEach(item => {
          if (item.productCode === this.currentRow.productCode && item.uuid === this.currentRow.uuid) {
            item.productId = newData.productId
            item.productName = newData.productName
            item.productCode = newData.productCode
            item.categoryName = newData.categoryName
            item.inventoryQuantity = newData.inventoryQuantity
            item.specification = newData.specification
            item.matchType = newData.matchType
            item.unit = item.saleMeasurementName || item.purchaseMeasurementName
            item.isSingle = newData.isSingle
            item.singleNumbers = newData.isSingle === 1 ? item.singleNumbers : null
            item.p1name = newData.p1name
            item.p2name = newData.p2name
            item.p3name = newData.p3name
            item.p4name = newData.p4name
            item.p5name = newData.p5name
            item.p6name = newData.p6name
            item.p7name = newData.p7name
            item.p8name = newData.p8name
            item.stockPrice = newData.stockPrice
            item.increaseValue = newData.increaseValue
            item.sourcePrice = newData.price
            item.price = newData.price
            item.costPrice = newData.costPrice
            item.repositoryAreaId = newData.repositoryAreaId
            item.locationId = newData.locationId
            item.locationName = newData.locationName
            item.areaName = newData.areaName
          }
        })
      }
      if (this.openReplaceType === 'standardPartsTableColumn') {
        this.standardPartsTableData.forEach(item => {
          if (item.productCode === this.currentRow.productCode && item.uuid === this.currentRow.uuid) {
            item.productId = newData.productId
            item.productName = newData.productName
            item.productCode = newData.productCode
            item.categoryName = newData.categoryName
            item.inventoryQuantity = newData.inventoryQuantity
            item.specification = newData.specification
            item.matchType = newData.matchType
            item.unit = item.saleMeasurementName || item.purchaseMeasurementName
            item.isSingle = newData.isSingle
            item.singleNumbers = newData.isSingle === 1 ? item.singleNumbers : null
            item.p1name = newData.p1name
            item.p2name = newData.p2name
            item.p3name = newData.p3name
            item.p4name = newData.p4name
            item.p5name = newData.p5name
            item.p6name = newData.p6name
            item.p7name = newData.p7name
            item.p8name = newData.p8name
            item.stockPrice = newData.stockPrice
            item.increaseValue = newData.increaseValue
            item.sourcePrice = newData.price
            item.price = newData.price
            item.costPrice = newData.costPrice
            item.repositoryAreaId = newData.repositoryAreaId
            item.locationId = newData.locationId
            item.locationName = newData.locationName
            item.areaName = newData.areaName
          }
        })
      }

      this.closeDialog()
      this.$loads.hidden()
    },
    openReplace(row, type) {
      console.log(row, 'row')
      this.currentRow = row
      this.openReplaceType = type
      this.dialogTop = '2vh'
      this.dialogWidth = '1000px'
      this.dialogTitle = this.$t('date20240227.tihxx') // 弹窗的title
      this.dialogContentComponent = 'ReplaceModal' // 弹窗显示的组件
      this.dialogData = row // 传给弹窗的数据
      this.dialogVisible = true // 控制弹窗
    },
    handleChangeType() {
      this.formModelBase.repositoryId = ''
      this.formModelBase.storeId = ''
      this.setBaseVisible1()
      this.changeChooseRepositorySearch()
    },
    judgeRowStyle({ row }) {
      if (!row.isBom && this.isKit) {
        return {
          backgroundColor: '#F56C6C'
        }
      }
    },
    getCreateDate() {
      const time = new Date()
      const year = time.getFullYear()
      const month = (time.getMonth() + 1).toString().padStart(2, '0')
      const date = (time.getDate()).toString().padStart(2, '0')
      return year + '-' + month + '-' + date
    },
    getSearchListClassify() {
      // 供应商类别
      searchListClassify({
        pageNum: 1,
        pageSize: 9999,
        menuId: 3,
        categoryId: 301
      }).then(res => {
        if (res.data.ret === 200) {
          this.supplierCategoryList = res.data.data.content.list.map(item => {
            return {
              label: item.name,
              value: item.id
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })
      // 供应商优质级别
      searchListClassify({
        pageNum: 1,
        pageSize: 9999,
        menuId: 3,
        categoryId: 303
      }).then(res => {
        if (res.data.ret === 200) {
          this.supplierlevelList = res.data.data.content.list.map(item => {
            return {
              label: item.name,
              value: item.id
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })
      // 供应商分组
      searchListClassify({
        pageNum: 1,
        pageSize: 9999,
        menuId: 3,
        categoryId: 302
      }).then(res => {
        if (res.data.ret === 200) {
          this.supplierGroupingList = res.data.data.content.list.map(item => {
            return {
              label: item.name,
              value: item.id
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })
    },
    getSearchListCurrency() {
      // 货币列表
      getCurrencyInfo({
        pageNum: 1,
        pageSize: 9999,
        isEffective: 1
      }).then((res) => {
        if (res.data.ret === 200) {
          this.supplierCurrencyList = res.data.data.content.list.map(item => {
            return {
              label: item.currencyName,
              value: item.id,
              ...item
            }
          })
          this.currencyFilter(this.formModelBase.currency)
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })
    },
    currencyFilter(e) {
      console.log('货币=====', e, this.supplierCurrencyList)
      if (!e || this.supplierCurrencyList.length === 0) {
        return false
      }
      const currencyItem = this.supplierCurrencyList.find(item => item.value === e)
      console.log('currencyItem====', currencyItem)
      this.convertModeCal = currencyItem.convertMode // 货币计算规则（*、/）
      this.convertRateCal = currencyItem.rate
      this.setBaseVisible()
    },
    setBaseVisible() {
      const localPriceIndex = this.sourceOrderTableColumn.findIndex((item) => {
        return item.field === 'localPrice'
      })
      const localMoneyIndex = this.sourceOrderTableColumn.findIndex((item) => {
        return item.field === 'localMoney'
      })
      const localTaxMoneyIndex = this.sourceOrderTableColumn.findIndex((item) => {
        return item.field === 'localTaxMoney'
      })
      const localUntaxMoneyIndex = this.sourceOrderTableColumn.findIndex((item) => {
        return item.field === 'localUntaxMoney'
      })
      const localAfterDiscountPriceIndex = this.sourceOrderTableColumn.findIndex((item) => {
        return item.field === 'localAfterDiscountPrice'
      })
      const localAfterDiscountMoneyIndex = this.sourceOrderTableColumn.findIndex((item) => {
        return item.field === 'localAfterDiscountMoney'
      })
      const localDiscountMoneyIndex = this.sourceOrderTableColumn.findIndex((item) => {
        return item.field === 'localTemporaryDiscount'
      })
      if (this.isSameCurrency === true) {
        this.sourceOrderTableColumn[localPriceIndex].visible = false
        this.sourceOrderTableColumn[localMoneyIndex].visible = false
        this.sourceOrderTableColumn[localTaxMoneyIndex].visible = false
        this.sourceOrderTableColumn[localUntaxMoneyIndex].visible = false
        this.sourceOrderTableColumn[localAfterDiscountPriceIndex].visible = false
        this.sourceOrderTableColumn[localAfterDiscountMoneyIndex].visible = false
        this.sourceOrderTableColumn[localDiscountMoneyIndex].visible = false
        this.$refs.sourceOutBoundDetails.$refs.customTable.loadColumn(this.sourceOrderTableColumn)
      } else {
        this.sourceOrderTableColumn[localPriceIndex].visible = true
        this.sourceOrderTableColumn[localMoneyIndex].visible = true
        this.sourceOrderTableColumn[localTaxMoneyIndex].visible = true
        this.sourceOrderTableColumn[localUntaxMoneyIndex].visible = true
        this.sourceOrderTableColumn[localAfterDiscountPriceIndex].visible = true
        this.sourceOrderTableColumn[localAfterDiscountMoneyIndex].visible = true
        this.sourceOrderTableColumn[localDiscountMoneyIndex].visible = true
        this.$refs.sourceOutBoundDetails.$refs.customTable.loadColumn(this.sourceOrderTableColumn)
      }
    },
    // 修改逻辑
    getEditData() {
      this.$loads.show()
      getSalesOutBoundSee({
        pageNum: 1,
        pageSize: 10,
        id: this.id
      }).then(res => {
        console.log(res, 'res========')
        if (res.data.ret === 200) {
          const editData = res.data.data.content
          if (editData.orderType === 1 || editData.orderType === 3) {
            this.isKit = false
          } else {
            this.isKit = true
          }
          this.tax = editData.tax
          this.formModelBase = {
            createDate: editData.createDate,
            createPersonId: editData.createPersonId,
            createPersonName: editData.createPersonName,
            number: editData.number,
            subject: editData.subject,
            sourceType: editData.sourceType,
            customerType: editData.customerType,
            customerId: editData.customerId,
            customerPhone: editData.customerPhone,
            orderType: editData.orderType,
            containerNumber: editData.containerNumber,
            outPersonId: editData.outPersonId,
            targetType: editData.targetType,
            repositoryId: editData.repositoryId,
            storeId: editData.storeId,
            currencyType: editData.currencyType,
            shouldMoney: 0,
            tax: editData.tax,
            level: editData.level
          }
          if (this.formModelBase.targetType === 1) {
            this.formModelBase.repositoryId = ''
            this.repositoryId1 = editData.repositoryId
          }
          const tempSourceArr = editData.saleOutSourceDetailVos.map(item => {
            if (this.isKit) {
              this.formModelBase.shouldMoney += item.quantity * item.price
            } else {
              const clacQuantity = editData.saleOutDetailVos.find(sItem => sItem.product.productId === item.product.productId && sItem.type === 2)
              this.formModelBase.shouldMoney = item.price * clacQuantity.outQuantity
            }
            return {
              productId: item.product.id,
              productName: item.product.productName,
              productCode: item.product.productCode,
              categoryName: item.product.categoryName,
              inventoryQuantity: item.inventoryQuantity,
              specification: item.product.specification,
              p1name: item.product.p1name,
              p2name: item.product.p2name,
              p3name: item.product.p3name,
              p4name: item.product.p4name,
              p5name: item.product.p5name,
              p6name: item.product.p6name,
              p7name: item.product.p7name,
              p8name: item.product.p8name,
              matchType: item.product.matchType,
              isBom: true,
              sourcePrice: item.price,
              sourceDiscount: item.discount,
              ...item
            }
          })
          this.sourceOrderTableData = deepClone(tempSourceArr)
          this.currencyFilter(this.formModelBase.currencyType)

          const tempArr = editData.saleOutDetailVos.map(item => {
            if (item.parentId) {
              console.log('item.parentId====', JSON.parse(item.parentId))
              return {
                id: item.id,
                productId: item.product.id,
                productName: item.product.productName,
                productCode: item.product.productCode,
                categoryName: item.product.categoryName,
                inventoryQuantity: item.inventoryQuantity,
                specification: item.product.specification,
                p1name: item.product.p1name,
                p2name: item.product.p2name,
                p3name: item.product.p3name,
                p4name: item.product.p4name,
                p5name: item.product.p5name,
                p6name: item.product.p6name,
                p7name: item.product.p7name,
                p8name: item.product.p8name,
                matchType: item.product.matchType,
                areaName: item.areaName,
                locationId: item.locationId,
                locationName: item.locationName,
                outQuantity: item.outQuantity,
                repositoryAreaId: item.repositoryAreaId,
                unit: item.unit,
                parentId: JSON.parse(item.parentId),
                type: item.type,
                isSingle: item.product.isSingle,
                singleNumbers: item.product.isSingle === 1 ? item.singleNumbers : null,
                sourceDetailId: item.sourceDetailId,
                sourceId: item.sourceId,
                price: item.price || 0,
                money: item.money || 0,
                stockMoney: item.stockMoney,
                stockPrice: item.stockPrice,
                increaseValue: item.increaseValue,
                costPrice: item.costPrice,
                costMoney: item.costMoney,
                uuid: item.uuid,
                mainProductId: item.mainProductId
              }
            } else {
              console.log('else :>> ', item)
              return {
                id: item.id,
                inventoryQuantity: item.inventoryQuantity,
                productId: item.product.id,
                productName: item.product.productName,
                productCode: item.product.productCode,
                categoryName: item.product.categoryName,
                specification: item.product.specification,
                p1name: item.product.p1name,
                p2name: item.product.p2name,
                p3name: item.product.p3name,
                p4name: item.product.p4name,
                p5name: item.product.p5name,
                p6name: item.product.p6name,
                p7name: item.product.p7name,
                p8name: item.product.p8name,
                matchType: item.product.matchType,
                areaName: item.areaName,
                locationId: item.locationId,
                locationName: item.locationName,
                outQuantity: item.outQuantity,
                repositoryAreaId: item.repositoryAreaId,
                unit: item.unit,
                type: item.type,
                isSingle: item.product.isSingle,
                singleNumbers: item.product.isSingle === 1 ? item.singleNumbers : null,
                sourceDetailId: item.sourceDetailId,
                sourceId: item.sourceId,
                price: item.price || 0,
                money: item.money || 0,
                stockMoney: item.stockMoney,
                stockPrice: item.stockPrice,
                increaseValue: item.increaseValue,
                costPrice: item.costPrice,
                costMoney: item.costMoney,
                uuid: item.uuid,
                mainProductId: item.mainProductId
              }
            }
          })
          if (this.isKit) {
            this.standardPartsTableData = tempArr.filter(item => item.type === 2)
            this.giftsTableData = tempArr.filter(item => item.type === 1)
            this.fastenerTableData = tempArr.filter(item => item.type === 3)
            this.afterSalesTableData = tempArr.filter(item => item.type === 4)
          } else {
            this.standardPartsTableData = deepClone(this.sourceOrderTableData)
            this.standardPartsTableData.forEach(item => {
              const tempItem = tempArr.find(tItem => tItem.productId === item.productId && item.type === 2)
              // 设置每一项的最大数量
              if (tempItem) {
                tempItem.quantity = item.quantity
              }
            })
            this.standardPartsTableData = tempArr.filter(item => item.type === 2)
            this.giftsTableData = tempArr.filter(item => item.type === 1)
            this.afterSalesTableData = tempArr.filter(item => item.type === 4)
          }

          if (this.formModelBase.orderType === 1) {
            console.log('this.giftsTableData >> ', this.giftsTableData)
            // 提取并去重 mainProductId
            const uniqueMainProductIds = [...new Set(this.giftsTableData.map(item => item.mainProductId))]

            const params = {
              level: this.formModelBase.level,
              list: uniqueMainProductIds
            }

            comboGetGiftV2(params).then((res) => {
              if (res.data.ret === 200) {
                const apiData = res.data.data.content

                // 检查apiData是否为空数组
                if (Array.isArray(apiData) && apiData.length === 0) {
                  this.giftListIsNull = true
                  return // 如果是空数组,直接返回,不进行后续处理
                }

                this.giftListIsNull = false

                this.giftsTableData = this.giftsTableData.map(giftItem => {
                  const mainProduct = apiData.find(mp => mp.mainProductId === giftItem.mainProductId)
                  if (!mainProduct) return giftItem

                  const detail = mainProduct.detailList.find(d =>
                    d.giftDetailList.some(g => g.productId === giftItem.productId)
                  )
                  if (!detail) return giftItem

                  const gift = detail.giftDetailList.find(g => g.productId === giftItem.productId)
                  if (!gift) return giftItem

                  const matchingStandardPart = this.standardPartsTableData.find(
                    standardItem => standardItem.productId === giftItem.mainProductId
                  )
                  if (!matchingStandardPart) return giftItem

                  return {
                    ...giftItem,
                    maxQuantity: matchingStandardPart.outQuantity * detail.maxQuantity,
                    groupId: gift.groupId
                  }
                })

                console.log('Updated giftsTableData:', this.giftsTableData)
              }
            })

            console.log('this.giftsTableData111 >> ', this.giftsTableData)
          }

          this.$loads.hidden()
        } else {
          this.$loads.hidden()
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })
    },
    handleChangeCurrency(e) {
      this.currencyFilter(e)
      // if (this.sourceOrderTableData.length > 0) {
      //   this.sourceOrderTableData.forEach((item) => {
      //     item.price = this.translateSalePriceToBase(item.sourcePrice, this.isSameCurrency, this.convertModeCal, this.convertRateCal)
      //     item.discount = this.translateSalePriceToBase(item.sourceDiscount, this.isSameCurrency, this.convertModeCal, this.convertRateCal)
      //     item.taxMoney = this.translateSalePriceToBase(item.sourceTaxMoney, this.isSameCurrency, this.convertModeCal, this.convertRateCal) || 0
      //   })
      // }
    },
    // 订单明细的编码字段
    changeShowCodeAttrSourceOrder() {
      if (this.showCodeAttrSourceOrder === 1) {
        if (this.attrListSourceOrder.length > 0) {
          // this.sourceOrderTableColumn = [...this.sourceOrderTableColumn, ...this.attrListSourceOrder]
          this.sourceOrderTableColumn.splice(7, 0, ...this.attrListSourceOrder)
          // 加载列配置
          this.$refs.sourceOutBoundDetails.$refs.customTable.loadColumn(this.sourceOrderTableColumn)
        } else {
          this.$loads.show()
          searchCodedAttribute({
            stat: 1
          }).then(res => {
            if (res.data.ret === 200) {
              const codedAttribute = res.data.data.content.filter(item => item.name)
              this.attrListSourceOrder = deepClone(codedAttribute).map(item => {
                return {
                  field: `p${item.id}name`,
                  title: item.name,
                  customType: 'customType'
                }
              })

              this.sourceOrderTableColumn.splice(7, 0, ...this.attrListSourceOrder)
              // 加载列配置
              this.$refs.sourceOutBoundDetails.$refs.customTable.loadColumn(this.sourceOrderTableColumn)
              this.$loads.hidden()
            }
          })
        }
      } else {
        this.sourceOrderTableColumn = this.sourceOrderTableColumn.filter(item => !item.customType)
        // 加载列配置
        this.$refs.sourceOutBoundDetails.$refs.customTable.loadColumn(this.sourceOrderTableColumn)
      }
    },
    // 标准件明细的编码字段
    changeShowCodeAttrStandardParts() {
      if (this.showCodeAttrStandardParts === 1) {
        if (this.attrListStandardParts.length > 0) {
          this.standardPartsTableColumn = [...this.standardPartsTableColumn, ...this.attrListStandardParts]
          // 加载列配置
          this.$refs.standardPartsDetails.$refs.customTable.loadColumn(this.standardPartsTableColumn)
        } else {
          this.$loads.show()
          searchCodedAttribute({
            stat: 1
          }).then(res => {
            if (res.data.ret === 200) {
              const codedAttribute = res.data.data.content.filter(item => item.name)
              this.attrListStandardParts = deepClone(codedAttribute).map(item => {
                return {
                  field: `c${item.id}Name`,
                  title: item.name,
                  customType: 'customType'
                }
              })

              this.standardPartsTableColumn = [...this.standardPartsTableColumn, ...this.attrListStandardParts]
              // 加载列配置
              this.$refs.standardPartsDetails.$refs.customTable.loadColumn(this.standardPartsTableColumn)
              this.$loads.hidden()
            }
          })
        }
      } else {
        this.standardPartsTableColumn = this.standardPartsTableColumn.filter(item => !item.customType)
        // 加载列配置
        this.$refs.standardPartsDetails.$refs.customTable.loadColumn(this.standardPartsTableColumn)
      }
    },
    // 出库明细的编码字段
    changeShowCodeOutBound() {
      if (this.showCodeAttrOutBound === 1) {
        if (this.attrListOutBound.length > 0) {
          this.outBoundTableColumn = [...this.outBoundTableColumn, ...this.attrListOutBound]
          // 加载列配置
          this.$refs.outBoundDetails.$refs.customTable.loadColumn(this.outBoundTableColumn)
        } else {
          this.$loads.show()
          searchCodedAttribute({
            stat: 1
          }).then(res => {
            if (res.data.ret === 200) {
              const codedAttribute = res.data.data.content.filter(item => item.name)
              this.attrListOutBound = deepClone(codedAttribute).map(item => {
                return {
                  field: `c${item.id}Name`,
                  title: item.name,
                  customType: 'customType'
                }
              })

              this.outBoundTableColumn = [...this.outBoundTableColumn, ...this.attrListOutBound]
              // 加载列配置
              this.$refs.outBoundDetails.$refs.customTable.loadColumn(this.outBoundTableColumn)
              this.$loads.hidden()
            }
          })
        }
      } else {
        this.outBoundTableColumn = this.outBoundTableColumn.filter(item => !item.customType)
        // 加载列配置
        this.$refs.outBoundDetails.$refs.customTable.loadColumn(this.outBoundTableColumn)
      }
    },
    // 随车赠品明细的编码字段
    changeShowCodeAttrGifts() {
      if (this.showCodeAttrGifts === 1) {
        if (this.attrListGifts.length > 0) {
          this.giftsTableColumn = [...this.giftsTableColumn, ...this.attrListGifts]
          // 加载列配置
          this.$refs.giftDetails.$refs.customTable.loadColumn(this.giftsTableColumn)
        } else {
          this.$loads.show()
          searchCodedAttribute({
            stat: 1
          }).then(res => {
            if (res.data.ret === 200) {
              const codedAttribute = res.data.data.content.filter(item => item.name)
              this.attrListGifts = deepClone(codedAttribute).map(item => {
                return {
                  field: `c${item.id}Name`,
                  title: item.name,
                  customType: 'customType'
                }
              })

              this.giftsTableColumn = [...this.giftsTableColumn, ...this.attrListGifts]
              // 加载列配置
              this.$refs.giftDetails.$refs.customTable.loadColumn(this.giftsTableColumn)
              this.$loads.hidden()
            }
          })
        }
      } else {
        this.giftsTableColumn = this.giftsTableColumn.filter(item => !item.customType)
        // 加载列配置
        this.$refs.giftDetails.$refs.customTable.loadColumn(this.giftsTableColumn)
      }
    },
    // 赠品出库明细的编码字段
    changeShowCodeAttrGiftsOut() {
      if (this.showCodeAttrGiftsOut === 1) {
        if (this.attrListGiftsOut.length > 0) {
          this.giftsOutTableColumn = [...this.giftsOutTableColumn, ...this.attrListGifts]
          // 加载列配置
          this.$refs.giftOutDetails.$refs.customTable.loadColumn(this.giftsOutTableColumn)
        } else {
          this.$loads.show()
          searchCodedAttribute({
            stat: 1
          }).then(res => {
            if (res.data.ret === 200) {
              const codedAttribute = res.data.data.content.filter(item => item.name)
              this.attrListGifts = deepClone(codedAttribute).map(item => {
                return {
                  field: `c${item.id}Name`,
                  title: item.name,
                  customType: 'customType'
                }
              })

              this.giftsOutTableColumn = [...this.giftsOutTableColumn, ...this.attrListGifts]
              // 加载列配置
              this.$refs.giftOutDetails.$refs.customTable.loadColumn(this.giftsOutTableColumn)
              this.$loads.hidden()
            }
          })
        }
      } else {
        this.giftsOutTableColumn = this.giftsOutTableColumn.filter(item => !item.customType)
        // 加载列配置
        this.$refs.giftOutDetails.$refs.customTable.loadColumn(this.giftsOutTableColumn)
      }
    },
    // 紧固件明细的编码字段
    changeShowCodeAttrFastener() {
      if (this.showCodeAttrFastener === 1) {
        if (this.attrListFastener.length > 0) {
          this.fastenerTableColumn = [...this.fastenerTableColumn, ...this.attrListFastener]
          // 加载列配置
          this.$refs.giftDetails.$refs.customTable.loadColumn(this.fastenerTableColumn)
        } else {
          this.$loads.show()
          searchCodedAttribute({
            stat: 1
          }).then(res => {
            if (res.data.ret === 200) {
              const codedAttribute = res.data.data.content.filter(item => item.name)
              this.attrListFastener = deepClone(codedAttribute).map(item => {
                return {
                  field: `c${item.id}Name`,
                  title: item.name,
                  customType: 'customType'
                }
              })

              this.fastenerTableColumn = [...this.fastenerTableColumn, ...this.attrListFastener]
              // 加载列配置
              this.$refs.giftDetails.$refs.customTable.loadColumn(this.fastenerTableColumn)
              this.$loads.hidden()
            }
          })
        }
      } else {
        this.fastenerTableColumn = this.fastenerTableColumn.filter(item => !item.customType)
        // 加载列配置
        this.$refs.giftDetails.$refs.customTable.loadColumn(this.fastenerTableColumn)
      }
    },
    // 售后明细的编码字段
    changeShowCodeAttrAfterSales() {
      if (this.showCodeAttrAfterSales === 1) {
        if (this.attrListAfterSales.length > 0) {
          this.afterSalesTableColumn = [...this.afterSalesTableColumn, ...this.attrListAfterSales]
          // 加载列配置
          this.$refs.afterSalesDetails.$refs.customTable.loadColumn(this.afterSalesTableColumn)
        } else {
          this.$loads.show()
          searchCodedAttribute({
            stat: 1
          }).then(res => {
            if (res.data.ret === 200) {
              const codedAttribute = res.data.data.content.filter(item => item.name)
              this.attrListAfterSales = deepClone(codedAttribute).map(item => {
                return {
                  field: `c${item.id}Name`,
                  title: item.name,
                  customType: 'customType'
                }
              })

              this.afterSalesTableColumn = [...this.afterSalesTableColumn, ...this.attrListAfterSales]
              // 加载列配置
              this.$refs.afterSalesDetails.$refs.customTable.loadColumn(this.afterSalesTableColumn)
              this.$loads.hidden()
            }
          })
        }
      } else {
        this.afterSalesTableColumn = this.afterSalesTableColumn.filter(item => !item.customType)
        // 加载列配置
        this.$refs.giftDetails.$refs.customTable.loadColumn(this.afterSalesTableColumn)
      }
    },
    // 添加源单
    handleAddSourceOrder() {
      if (!this.formModelBase.customerId) {
        this.$message.error(this.$t('z_date20240606.qingxzkh'))
        return
      }
      if (!this.formModelBase.repositoryId && this.formModelBase.targetType === 0) {
        this.$message.error(this.$t('zhangjx.qingxzck'))
        return
      }
      if (!this.formModelBase.storeId && this.formModelBase.targetType === 1) {
        this.$message.error(this.$t('z_date202403134.qingxzmd'))
        return
      }
      if (this.formModelBase.orderType) {
        this.dialogTop = '2vh'
        this.dialogWidth = '1000px'
        this.dialogTitle = this.$t('z_date20240411.xuanzyd') // 弹窗的title
        this.dialogContentComponent = 'ChooseSalesOrder' // 弹窗显示的组件
        this.otherParameter = { judgeStat: 2, orderType: this.formModelBase.orderType, deliverStat: 4 }
        // 支持选择源单，根据下单方式筛选，选择销售单时需要筛选只能选择到已审核且非全部出库的订单
        // 选择发货状态为 未发货和部分发货的订单 deliverStat: 4
        this.dialogData = {
          type: 'radio'
        } // 传给弹窗的数据
        this.echoArr = []
        this.dialogVisible = true // 控制弹窗
      } else {
        this.$message.error(this.$t('zhangjx.qingxzxdfs'))
      }
    },
    handleChangeSourceType() {
      this.formModelBase.customerPhone = null
      this.formModelBase.customerId = null
      this.formModelBase.customerType = null
      this.formModelBase.currencyType = null
      this.sourceOrderTableData = []
      this.standardPartsTableData = []
      this.giftsTableData = []
      this.afterSalesTableData = []
      this.formModelBase.shouldMoney = 0
    },
    handleChangeOrderType(val) {
      this.formModelBase.customerPhone = null
      this.formModelBase.customerId = null
      this.formModelBase.customerType = null
      this.formModelBase.currencyType = null
      this.sourceOrderTableData = []
      this.standardPartsTableData = []
      this.giftsTableData = []
      this.afterSalesTableData = []
      this.formModelBase.shouldMoney = 0
      if (val === 1 || val === 3) {
        this.isKit = false
      } else {
        this.isKit = true
        this.fastenerTableData = []
      }
    },
    changeChooseCustomerType() {
      this.formModelBase.customerPhone = null
      this.formModelBase.customerId = null
      this.formModelBase.currencyType = null
      this.sourceOrderTableData = []
      this.standardPartsTableData = []
      this.giftsTableData = []
      this.afterSalesTableData = []
      this.formModelBase.shouldMoney = 0
    },
    changeChooseCustomerSearch(item) {
      console.log('item :>> ', item)
      this.formModelBase.level = item.level
      this.formModelBase.customerPhone = item.phoneNumber
      this.formModelBase.customerType = item.customerType
      this.formModelBase.currencyType = null
      this.tax = item.taxRate
      this.sourceOrderTableData = []
      this.standardPartsTableData = []
      this.giftsTableData = []
      this.afterSalesTableData = []
      this.formModelBase.shouldMoney = 0
    },
    changeChooseRepositorySearch() {
      this.sourceOrderTableData = []
      this.standardPartsTableData = []
      this.giftsTableData = []
      this.afterSalesTableData = []
      this.formModelBase.shouldMoney = 0
    },
    getZhangTao(setId) {
      getAccountSetDetailInfo({
        pageNum: 1,
        pageSize: 9999,
        id: setId
      }).then(res => {
        if (res.data.ret === 200) {
          this.taxRateCal = res.data.data.content.list[0].taxRate
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })
    },
    // 唯一号管理完成
    handleFinishSingleManage(data) {
      this.currentProduct.singleNumbers = data
    },
    // 单个子件对象根据父件id更新数量
    clacSonNumByParentNumInObject(sItem, parentArr, parentQuantityKey = 'quantity') {
      sItem.outQuantity = 0
      for (const key in sItem.parentId) {
        const quota = sItem.parentId[key]
        const parentItem = parentArr.find(pItem => +pItem.productId === +key)
        if (parentItem) {
          sItem.outQuantity += parentItem[`${parentQuantityKey}`] * (quota || 1)
        }
      }
    },
    // 根据父件id删除数组中对应的子件
    handleDeleteSonItemByParentId(sonArr, pId) {
      for (let index = 0; index < sonArr.length; index++) {
        const sItem = sonArr[index]
        if (sItem.parentId) {
          if (typeof sItem.parentId === 'number') {
            if (pId === sItem.parentId) {
              sonArr.splice(index, 1)
              index--
            }
          } else {
            if (sItem.parentId[`${pId}`]) {
              delete sItem.parentId[`${pId}`]
              const parentIdTemp = deepClone(sItem.parentId)
              if (JSON.stringify(parentIdTemp) === '{}') {
                sonArr.splice(index, 1)
                index--
              } else {
                // 删除完后还有关联的父件重置其数量
                if (this.isKit) {
                  this.clacSonNumByParentNumInObject(sItem, this.sourceOrderTableData)
                } else {
                  this.clacSonNumByParentNumInObject(sItem, this.standardPartsTableData, 'outQuantity')
                }
              }
            }
          }
        }
      }
    },
    // 订单明细删除按钮
    handleDelSourceOrder() {
      if (this.isKit) {
        this.handleDelSourceOrderInKit()
      } else {
        this.handleDelSourceOrderInVehicleOrParts()
      }
    },
    // 套件模式下删除订单明细操作
    handleDelSourceOrderInKit() {
      const selectedList = this.$refs.sourceOutBoundDetails.$refs.customTable.getCheckboxRecords()
      if (selectedList.length === 0) {
        return false
      }
      this.sourceOrderTableData = this.sourceOrderTableData.filter((b) => {
        return !selectedList.some((a) => {
          return a.productCode === b.productCode
        })
      })
      this.$refs.sourceOutBoundDetails.$refs.customTable.clearCheckboxRow()
      selectedList.forEach(item => {
        this.handleDeleteSonItemByParentId(this.standardPartsTableData, item.productId)
        this.handleDeleteSonItemByParentId(this.giftsTableData, item.productId)
        this.handleDeleteSonItemByParentId(this.fastenerTableData, item.productId)
      })
    },
    // 整车模式下删除订单明细操作
    handleDelSourceOrderInVehicleOrParts() {
      const selectedList = this.$refs.sourceOutBoundDetails.$refs.customTable.getCheckboxRecords()
      if (selectedList.length === 0) {
        return false
      }
      this.sourceOrderTableData = this.sourceOrderTableData.filter((b) => {
        return !selectedList.some((a) => {
          return a.productCode === b.productCode
        })
      })
      this.$refs.sourceOutBoundDetails.$refs.customTable.clearCheckboxRow()
      const sourceProductIds = this.sourceOrderTableData.map(item => item.productId)
      // for (let index = 0; index < this.standardPartsTableData.length; index++) {
      //   const element = this.standardPartsTableData[index]
      //   if (!sourceProductIds.includes(element.productId)) {
      //     this.standardPartsTableData.splice(index, 1)
      //   }
      // }
      this.standardPartsTableData = this.standardPartsTableData.filter(item => sourceProductIds.includes(item.productId))

      selectedList.forEach(item => {
        this.handleDeleteSonItemByParentId(this.giftsTableData, item.productId)
      })
    },
    // 套件修改数量触发子件数量更新
    handleChangeKitQuantity(productId) {
      console.log('productId=====', productId)
      this.clacSonNumByParentNum(this.standardPartsTableData, this.sourceOrderTableData, 'quantity', productId)
      this.clacSonNumByParentNum(this.giftsTableData, this.sourceOrderTableData, 'quantity', productId)
      this.clacSonNumByParentNum(this.fastenerTableData, this.sourceOrderTableData, 'quantity', productId)
      this.sourceOrderTableData.forEach(element => {
        this.formModelBase.shouldMoney = element.price * (element.quantity)
      })
    },
    // 非套件修改数量触发子件数量更新
    handleChangeVehicleOrPartsQuantity(productId) {
      this.clacSonNumByParentNum(this.giftsTableData, this.standardPartsTableData, 'outQuantity', productId)
      this.sourceOrderTableData.forEach((element, index) => {
        const clacQuantity = this.standardPartsTableData[index].outQuantity
        this.formModelBase.shouldMoney = element.price * clacQuantity
      })
      this.giftsTableData = this.giftsTableData.map(giftItem => {
        if (giftItem.mainProductId === productId.productId) {
          return {
            ...giftItem,
            outQuantity: productId.outQuantity * giftItem.quantity
          }
        }
        return giftItem
      })
    },
    // 添加物品明细
    handleOpenProductDialog(isSource = false) {
      console.log('isSource====', isSource)
      this.isSource = isSource
      this.dialogTop = '2vh'
      this.dialogWidth = '1000px'
      this.dialogTitle = this.$t('date20240227.xuanzwp') // 弹窗的title
      this.dialogContentComponent = 'ChooseProduct' // 弹窗显示的组件
      this.dialogData = {
        type: 'checkbox'
      } // 传给弹窗的数据
      if (isSource) {
        const temp = this.sourceOrderTableData
        this.echoArr = deepClone(temp)
      } else {
        console.log('逻辑分叉')
        const temp = this.activeName === '2' ? this.giftsTableData : this.afterSalesTableData
        this.echoArr = deepClone(temp)
      }
      this.dialogVisible = true // 控制弹窗
    },
    // 打开唯一号弹窗
    handleOpenSingeDialog(row) {
      this.currentProduct = row
      this.singleDialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    },
    // 批量获取库区和货位
    async getProductLocation(productArr) {
      const promiseArr = productArr.map(item => {
        return searchListLocationAndBatch({
          measurementType: 2,
          productId: item.productId,
          repositoryId: this.formModelBase.targetType === 0 ? this.formModelBase.repositoryId : this.repositoryId1
          // repositoryId: this.formModelBase.repositoryId
        })
      })
      const lcationArr = await Promise.all(promiseArr)

      lcationArr.forEach((item, index) => {
        this.$set(productArr[index], 'repositoryAreaId', item.data.data.content.repositoryAreaId)
        this.$set(productArr[index], 'locationId', item.data.data.content.locationId)
        this.$set(productArr[index], 'locationName', item.data.data.content.locationName)
        this.$set(productArr[index], 'areaName', item.data.data.content.areaName)
        const totalQuantity = item.data.data.content.partInventoryVos
          ? item.data.data.content.partInventoryVos.reduce((sum, part) => sum + (part.quantity || 0), 0)
          : 0
        this.$set(productArr[index], 'inventoryQuantity', totalQuantity)
      })
    },
    // 根据父bom计算子物料的数量
    // sonArr子件数组 parentArr父件数组
    // parentQuantityKey父件数组中表示数量的key值 changeParnetId需要对应的父件key不传表示全部父件
    clacSonNumByParentNum(sonArr, parentArr, parentQuantityKey = 'quantity', changeParnetId = 'all') {
      console.log(sonArr, parentArr)
      sonArr.forEach((sItem) => {
        if (sItem.parentId) {
          // parentId为number则子物料只对应一个父物料
          if (typeof sItem.parentId === 'number') {
            if (changeParnetId === 'all') {
              const parentItem = parentArr.find(pItem => pItem.productId === sItem.parentId)
              if (parentItem) {
                sItem.outQuantity = parentItem[`${parentQuantityKey}`] * (sItem.quota || 1)
              }
            } else {
              const parentItem = parentArr.find(pItem => (pItem.productId === sItem.parentId) && (pItem.productId === changeParnetId))
              if (parentItem) {
                sItem.outQuantity = parentItem[`${parentQuantityKey}`] * (sItem.quota || 1)
              }
            }
          } else {
            // parentId不为number则子物料对应多个父物料
            sItem.outQuantity = 0
            if (changeParnetId === 'all') {
              for (const key in sItem.parentId) {
                const quota = sItem.parentId[key]
                const parentItem = parentArr.find(pItem => pItem.productId === +key)
                if (parentItem) {
                  sItem.outQuantity += parentItem[`${parentQuantityKey}`] * (quota || 1)
                }
              }
            } else {
              for (const key in sItem.parentId) {
                const quota = sItem.parentId[key]
                console.log('quota=====', quota)
                const parentItem = parentArr.find(pItem => (pItem.productId === +key) && (pItem.productId === changeParnetId))
                if (parentItem) {
                  sItem.outQuantity += parentItem[`${parentQuantityKey}`] * (quota || 1)
                }
              }
            }
          }
        }
      })
    },
    // 合并productid相同的数据,子件比例存储到parentId中 eg: {1: 3, 2: 4}
    mergeArrayObjects(array) {
      const result = {}
      array.forEach(item => {
        if (!result[item.productId]) {
          result[item.productId] = { ...item } // 拷贝item对象
          result[item.productId].parentId = {} // 父id初始化为对象{parentId： quota}
          result[item.productId].parentId[item.parentId] = item.quota // 父id初始化为对象{parentId： quota}
        } else {
          result[item.productId].outQuantity += item.outQuantity // 数量累加
          result[item.productId].parentId[item.parentId] = item.quota // 父id添加
        }
      })
      return Object.values(result)
    },
    // 整车/散件处理方法
    // data 查询到的bom信息Array
    async handleVehicleOrParts(data) {
      const nestedArr = data.map(item => item.materialsListDetailVos)
      const flatArr = nestedArr.flat(Infinity)
      await getProductStockPrice({ productIds: flatArr.map(item => item.productId).concat(this.sourceOrderTableData.map(item => item.productId)).join(',') }).then(res => {
        if (res.data.ret === 200) {
          flatArr.forEach(item => {
            const newObj = res.data.data.content.find(Obj => Obj.productId === item.productId)
            item.stockPrice = this.currencyPriceTranslate(
              newObj.stockPrice,
              this.isSameCurrency,
              this.convertModeCal,
              this.convertRateCal
            )
            item.increaseValue = newObj.increaseValue || 0
          })
          this.sourceOrderTableData.forEach(item => {
            const newItem = res.data.data.content.find(Obj => Obj.productId === item.productId)
            item.stockPrice = this.currencyPriceTranslate(
              item.stockPrice,
              this.isSameCurrency,
              this.convertModeCal,
              this.convertRateCal
            )
            item.increaseValue = newItem.increaseValue || 0
          })
        }
      })
      this.standardPartsTableData = deepClone(this.sourceOrderTableData)
      this.standardPartsTableData.forEach(item => {
        item.outQuantity = item.quantity
        item.type = 2
      })
      this.clacSonNumByParentNum(flatArr, this.sourceOrderTableData)
      const clacArr = this.mergeArrayObjects(flatArr)
      console.log(flatArr, clacArr)
      clacArr.forEach(item => {
        delete item.id
        item.unit = item.saleMeasurementName || item.purchaseMeasurementName
      })
      // type 1赠送件 2标准件 3紧固件
      // this.giftsTableData = clacArr.filter(item => item.type === 1)

      this.getProductLocation([...this.giftsTableData, ...this.standardPartsTableData])
      this.afterSalesTableData = []
    },
    // 套件处理方法
    // data 查询的物料信息Array
    async handleKit(data) {
      console.log(data, 'handleKit-data')
      const nestedArr = data.map(item => item.materialsListDetailVos)
      const flatArr = nestedArr.flat(Infinity)
      await getProductStockPrice({ productIds: flatArr.map(item => item.productId).join(',') }).then(res => {
        if (res.data.ret === 200) {
          flatArr.forEach(item => {
            const newObj = res.data.data.content.find(Obj => Obj.productId === item.productId)
            item.stockPrice = this.currencyPriceTranslate(
              newObj.stockPrice,
              this.isSameCurrency,
              this.convertModeCal,
              this.convertRateCal
            )
            item.increaseValue = newObj.increaseValue || 0
          })
        }
      })
      this.clacSonNumByParentNum(flatArr, this.sourceOrderTableData)
      const clacArr = this.mergeArrayObjects(flatArr)
      clacArr.forEach(item => {
        delete item.id
        item.unit = item.saleMeasurementName || item.purchaseMeasurementName
      })
      // type 1赠送件 2标准件 3紧固件
      this.standardPartsTableData = clacArr.filter(item => item.type === 2)
      console.log(this.standardPartsTableData, 'this.standardPartsTableData')
      this.giftsTableData = clacArr.filter(item => item.type === 1)
      this.fastenerTableData = clacArr.filter(item => item.type === 3)
      this.getProductLocation([...this.giftsTableData, ...this.standardPartsTableData, ...this.fastenerTableData])
      this.afterSalesTableData = []
    },
    chooseSaleOrderRadio(detailData, baseData) {
      this.formModelBase.currencyType = baseData.currencyType
      this.formModelBase.customerType = baseData.customerType
      this.formModelBase.customerId = baseData.customerId
      this.formModelBase.customerPhone = baseData.customerPhone
      this.formModelBase.shouldMoney = 0
      // this.tax = baseData.tax
      this.currencyFilter(this.formModelBase.currencyType)
      const newData = deepClone(detailData).map((item) => {
        this.formModelBase.shouldMoney += (item.quantity - item.outQuantity) * item.price
        console.log('item====', item)
        return {
          repositoryId: this.formModelBase.repositoryId,
          storeId: this.formModelBase.storeId,
          sourceDetailId: item.id,
          sourceId: item.sourceId,
          sourceNumber: item.sourceNumber,
          productId: item.product.id,
          productName: item.product.productName,
          productCode: item.product.productCode,
          categoryName: item.product.categoryName,
          inventoryQuantity: item.inventoryQuantity,
          specification: item.product.specification,
          quantity: item.quantity - item.outQuantity,
          sourceTaxMoney: item.taxMoney,
          taxMoney: item.taxMoney,
          maxQuantity: item.quantity - item.outQuantity,
          sourcePrice: item.price,
          price: item.price,
          sourceDiscount: item.discount,
          discount: item.discount,
          isSingle: item.product.isSingle,
          unit: item.unit || item.product.saleMeasurementName || item.product.purchaseMeasurementName,
          p1name: item.product.p1name,
          p2name: item.product.p2name,
          p3name: item.product.p3name,
          p4name: item.product.p4name,
          p5name: item.product.p5name,
          p6name: item.product.p6name,
          p7name: item.product.p7name,
          p8name: item.product.p8name,
          isBom: false, // 初始化物料是否为Bom字段
          temporaryDiscount: item.temporaryDiscount || 0,
          localTemporaryDiscount: item.localTemporaryDiscount || 0,
          matchType: item.product.matchType,
          afterDiscountPrice: item.afterDiscountPrice
        }
      }).filter(item => {
        return item.quantity > 0
      })
      this.sourceOrderTableData = [...newData]
      setTimeout(() => {
        this.$refs.sourceOutBoundDetails.$refs.customTable.updateFooter()
      }, 100)
      const productIds = detailData.map(item => item.product.id)
      searchMaterialsList({
        pageNum: 1,
        pageSize: 999,
        bomTypeId: 5,
        productIds: productIds.join(','),
        isActive: 1
      }).then((res) => {
        if (res.data.ret === 200) {
          const temp = res.data.data.content.list?.map(bomItem => {
            bomItem.materialsListDetailVos?.map(materials => {
              materials.quota = materials.saleQuota || materials.quota
              materials.costPrice = 0
              return {
                ...materials
              }
            })
            return bomItem
          })
          // 初始化是否处理了订单明细中的isBom字段
          let isClacDetailBom = false
          if (temp.length === this.sourceOrderTableData.length) {
            this.sourceOrderTableData.forEach(item => {
              item.isBom = true
            })
            isClacDetailBom = true
          }
          // 子件记录父件id
          temp.forEach(item => {
            if (!isClacDetailBom) {
              const sourceItem = this.sourceOrderTableData.find(sItem => sItem.productId === item.productId)
              if (sourceItem) {
                sourceItem.isBom = true
              }
            }
            item.materialsListDetailVos.forEach(sItem => {
              // 先记录每个子件对应父件id,后期合并parentId和quota到parentId中 eg: {11: 3, 19: 4}
              // 详情见mergeArrayObjects方法
              sItem.parentId = item.productId
              sItem.costPrice = item.costPrice
            })
          })
          const handleMap = {
            1: () => {
              this.handleVehicleOrParts(temp)
            },
            2: () => { this.handleKit(temp) },
            3: () => { this.handleVehicleOrParts(temp) }
          }
          console.log(this.formModelBase.orderType, 'this.formModelBase.orderType')
          handleMap[this.formModelBase.orderType]()
          this.$nextTick(() => {
            this.$refs.standardPartsDetails.$refs.customTable.updateFooter()
          })
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })

      if (this.formModelBase.orderType === 1) {
        const notComplete = this.sourceOrderTableData.map((item) => item.productId)

        const params = {
          level: this.formModelBase.level,
          list: notComplete
        }

        comboGetGiftV2(params).then((res) => {
          if (res.data.ret === 200) {
            this.giftsTableData = res.data.data.content.flatMap((item) => {
              return item.detailList.flatMap((detailItem) => {
                const giftQuantity = detailItem.giftDetailList.length * detailItem.quantity
                const exceedsMaxQuantity = giftQuantity > detailItem.maxQuantity
                return detailItem.giftDetailList.map((giftItem) => {
                  return {
                    ...giftItem,
                    ...giftItem.product,
                    mainProductId: item.mainProductId,
                    quantity: detailItem.quantity,
                    maxQuantity: detailItem.maxQuantity,
                    outQuantity: exceedsMaxQuantity ? 0 : undefined // 如果超过最大数量,设置为0
                  }
                })
              })
            })

            console.log('this.giftsTableData111 >> ', this.giftsTableData)

            this.giftsTableData = this.giftsTableData.map(giftItem => {
              const matchingStandardPart = this.sourceOrderTableData.find(
                standardItem => standardItem.productId === giftItem.mainProductId
              )

              console.log('matchingStandardPart >> ', matchingStandardPart)

              if (matchingStandardPart) { // 只有当outQuantity不为0时才计算
                return {
                  ...giftItem,
                  maxQuantity: matchingStandardPart.quantity * giftItem.maxQuantity,
                  outQuantity: giftItem.outQuantity === 0 ? 0 : matchingStandardPart.quantity * giftItem.quantity,
                  mainProductName: matchingStandardPart.productName
                }
              }

              return giftItem
            })

            if (this.giftsTableData.length === 0) {
              this.giftListIsNull = true
            } else {
              this.giftListIsNull = false
            }

            this.$nextTick(() => {
              this.$refs.standardPartsDetails.$refs.customTable.updateFooter()
            })
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
      }

      this.closeDialog()
    },
    async chooseProductData(data) {
      console.log('data====物料信息', data)
      if (this.isSource) {
        const newData = deepClone(data).map((item) => {
          this.formModelBase.shouldMoney += 1 * item.salePrice
          console.log('item====', item)
          return {
            sourceDetailId: null,
            sourceId: null,
            sourceNumber: null,
            productId: item.id,
            productName: item.productName,
            productCode: item.productCode,
            categoryName: item.categoryName,
            inventoryQuantity: item.inventoryQuantity,
            specification: item.specification,
            quantity: 1,
            maxQuantity: 99999,
            price: _that.translateSalePriceToBase(item.salePrice, this.isSameCurrency, this.convertModeCal, this.convertRateCal),
            sourcePrice: item.salePrice,
            discount: 0,
            sourceDiscount: 0,
            isSingle: item.isSingle,
            unit: item.saleMeasurementName || item.unit,
            p1name: item.p1name,
            p2name: item.p2name,
            p3name: item.p3name,
            p4name: item.p4name,
            p5name: item.p5name,
            p6name: item.p6name,
            p7name: item.p7name,
            p8name: item.p8name,
            temporaryDiscount: 0, // 临时折扣
            localTemporaryDiscount: 0,
            isBom: false, // 初始化物料是否为Bom字段
            matchType: item.matchType
          }
        })
        this.sourceOrderTableData = [...newData]
        this.$nextTick(() => {
          this.$refs.sourceOutBoundDetails.$refs.customTable.updateFooter()
        })
        const productIds = newData.map(item => item.productId)
        searchMaterialsList({
          pageNum: 1,
          pageSize: 999,
          bomTypeId: 5,
          productIds: productIds.join(',')
        }).then((res) => {
          if (res.data.ret === 200) {
            const temp = res.data.data.content.list
            // 初始化是否处理了订单明细中的isBom字段
            let isClacDetailBom = false
            if (temp.length === this.sourceOrderTableData.length) {
              this.sourceOrderTableData.forEach(item => {
                item.isBom = true
              })
              isClacDetailBom = true
            }
            // 子件记录父件id
            temp.forEach(item => {
              if (!isClacDetailBom) {
                const sourceItem = this.sourceOrderTableData.find(sItem => sItem.productId === item.productId)
                if (sourceItem) {
                  sourceItem.isBom = true
                }
              }
              item.materialsListDetailVos.forEach(sItem => {
              // 先记录每个子件对应父件id,后期合并parentId和quota到parentId中 eg: {11: 3, 19: 4}
              // 详情见mergeArrayObjects方法
                sItem.parentId = item.productId
                sItem.costPrice = 0
              })
            })
            const handleMap = {
              1: () => {
                this.handleVehicleOrParts(temp)
              },
              2: () => { this.handleKit(temp) },
              3: () => { this.handleVehicleOrParts(temp) }
            }
            handleMap[this.formModelBase.orderType]()
            this.$nextTick(() => {
              this.$refs.standardPartsDetails.$refs.customTable.updateFooter()
            })
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
      } else {
        // this.activeName 2赠品 4售后
        const newData = deepClone(data).map(item => {
          return {
            productId: item.id,
            productCode: item.productCode,
            productName: item.productName,
            specification: item.specification,
            categoryName: item.categoryName,
            inventoryQuantity: item.inventoryQuantity,
            unit: item.saleMeasurementName || item.purchaseMeasurementName,
            isSingle: item.isSingle,
            outQuantity: 1,
            c1Name: item.p1name,
            c2Name: item.p2name,
            c3Name: item.p3name,
            c4Name: item.p4name,
            c5Name: item.p5name,
            c6Name: item.p6name,
            c7Name: item.p7name,
            c8Name: item.p8name,
            costPrice: item.costPrice,
            matchType: item.matchType,
            type: this.activeName === '2' ? 1 : 4 // type 1赠送件 2标准件/出库明细 3紧固件 4售后
          }
        })
        const actionArr = this.activeName === '2' ? this.giftsTableData : this.afterSalesTableData
        newData.forEach(element => {
          const findItem = actionArr.find(item => item.productCode === element.productCode)
          if (findItem) {
            Object.assign(element, findItem)
          }
        })
        await getProductStockPrice({ productIds: newData.map(productIdItem => productIdItem.productId).join(',') }).then(res => {
          if (res.data.ret === 200) {
            newData.forEach(newDataItem => {
              const newObj = res.data.data.content.find(Obj => Obj.productId === newDataItem.productId)
              newDataItem.stockPrice = this.currencyPriceTranslate(
                newObj.stockPrice,
                this.isSameCurrency,
                this.convertModeCal,
                this.convertRateCal
              )
              newDataItem.increaseValue = newObj.increaseValue || 0
            })
          }
        })
        console.log(newData, 'newDatanewData')
        if (this.activeName === '2') {
          this.giftsTableData = newData
          this.getProductLocation([...this.giftsTableData])
        } else {
          this.afterSalesTableData = newData
          this.getProductLocation([...this.afterSalesTableData])
        }
      }

      console.log('giftsTableData :>> ', this.giftsTableData)

      if (this.giftListIsNull) {
        this.giftsTableData.forEach((item) => {
          item.maxQuantity === 999
        })
      }

      this.closeDialog()
    },
    handleDel() {
      if (this.activeName === '2') {
        const selectedList = this.$refs.giftDetails.$refs.customTable.getCheckboxRecords()
        if (selectedList.length === 0) {
          return
        }
        this.giftsTableData = this.giftsTableData.filter((b) => {
          return !selectedList.some((a) => {
            return a.productCode === b.productCode
          })
        })
        this.$refs.giftDetails.$refs.customTable.clearCheckboxRow()
      } else {
        const selectedList = this.$refs.afterSalesDetails.$refs.customTable.getCheckboxRecords()
        if (selectedList.length === 0) {
          return false
        }
        this.afterSalesTableData = this.afterSalesTableData.filter((b) => {
          return !selectedList.some((a) => {
            return a.productCode === b.productCode
          })
        })
        this.$refs.afterSalesDetails.$refs.customTable.clearCheckboxRow()
      }
    },
    // 计算金额
    calcMoney(row) {
      const tempMoney = row.price * row.quantity
      row.money = tempMoney
      return tempMoney
    },
    // 计算未税金额=金额/(1+税率)   税额=金额*税率
    getUnTaxMoney(row) {
      row.untaxMoney = (row.afterDiscountMoney / (1 + this.tax / 100)).toFixed(this.$moneyDigit)
      return row.untaxMoney
    },
    // 计算折扣额
    getDiscountMoney(row) {
      row.discountMoney = (row.discount * row.quantity).toFixed(this.$moneyDigit)
      return row.discountMoney
    },
    // 计算税额=(含税金额)
    getTaxMoney(row) {
      row.taxMoney = (row.afterDiscountMoney - row.untaxMoney).toFixed(this.$moneyDigit)
      return row.taxMoney
    },
    getCostMoney(row) {
      row.costMoney = (row.costPrice * row.outQuantity).toFixed(this.$moneyDigit)
      return row.taxMoney
    },
    // 计算折后单价
    getADP(row) {
      row.afterDiscountPrice = (row.price - row.temporaryDiscount).toFixed(this.$moneyDigit)
      return row.afterDiscountPrice
    },
    // 计算折后金额
    getADM(row) {
      row.afterDiscountMoney = (row.afterDiscountPrice * row.quantity).toFixed(this.$moneyDigit)
      return row.afterDiscountMoney
    },
    getStockMoney(row) {
      row.stockMoney = (row.stockPrice * row.outQuantity * (1 + row.increaseValue / 100)).toFixed(this.$moneyDigit)
      return row.stockMoney
    },
    // 总计
    sumNum(list, field) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return Number(count.toFixed(2))
    },
    // 订单明细合计
    getSummariesSourceOrder({ columns, data }) {
      // 返回一个二维数组的表尾合计
      const B = [
        { field: 'quantity', type: 'quantity' },
        { field: 'outQuantity', type: 'quantity' },
        {
          field: 'money',
          type: 'money'
        },
        {
          field: 'localMoney',
          type: 'money'
        },
        {
          field: 'untaxMoney',
          type: 'money'
        },
        {
          field: 'localUntaxMoney',
          type: 'money'
        },
        {
          field: 'taxMoney',
          type: 'money'
        },
        {
          field: 'localTaxMoney',
          type: 'money'
        },
        {
          field: 'discount',
          type: 'money'
        },
        {
          field: 'discountMoney',
          type: 'money'
        },
        {
          field: 'localAfterDiscountPrice',
          type: 'money'
        },
        {
          field: 'afterDiscountMoney',
          type: 'money'
        },
        {
          field: 'localAfterDiscountMoney',
          type: 'money'
        },
        {
          field: 'stockMoney',
          type: 'money'
        }
      ]
      const footData = columns.map((column, columnIndex) => {
        if (columnIndex === 0) {
          return this.$t('date20240227.hej')
        }
        const findItem = B.find((item) => item.field === column.field)
        if (findItem) {
          switch (findItem.type) {
            case 'quantity':
              return this.$computeQuantityTotal(data, findItem.field)
            case 'money':
              return this.$computeMoneyTotal(data, findItem.field)
            default:
              break
          }
        }
        return '-'
      })
      return [footData]
    },
    currencyPriceTranslate(price, isSameCurrency, mode, rate) {
      if (isNaN(price) || rate === 0 || price === 0) {
        return this.$formatPriceDigit(0)
      }
      // 销售模块带出金额为本位币金额
      let calcResult = 0
      if (isSameCurrency) {
        // 如果供应商的币种和当前登录账号币种一致，无需计算
        calcResult = price
      } else {
        if (mode === 2) {
          calcResult = price * rate
        }
        if (mode === 1) {
          calcResult = price / rate
        }
      }
      return calcResult
    },
    // 标准件明细合计
    getSummariesStandardParts({ columns, data }) {
      // 返回一个二维数组的表尾合计
      const B = [
        // 金额合计、本位币金额合计、折扣额合计、本位币折扣额合计、折后金额、本位币折后金额、税额、本位币税额、未税金额、本位币未税金额、数量合计
        'num'
      ]
      const footData =
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '合计'
          }
          const findItem = B.find(item => item === column.field)
          if (findItem) {
            // return this.formattedNumber('0,0.000000', this.sumNum(data, findItem))
            return this.sumNum(data, findItem)
          }
          return '-'
        })
      return [footData]
    },
    // 出库明细合计
    getSummariesOutBound({ columns, data }) {
      // 返回一个二维数组的表尾合计
      const B = [
        // 金额合计、本位币金额合计、折扣额合计、本位币折扣额合计、折后金额、本位币折后金额、税额、本位币税额、未税金额、本位币未税金额、数量合计
        'num'
      ]
      const footData =
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '合计'
          }
          const findItem = B.find(item => item === column.field)
          if (findItem) {
            // return this.formattedNumber('0,0.000000', this.sumNum(data, findItem))
            return this.sumNum(data, findItem)
          }
          return '-'
        })
      return [footData]
    },
    // 随车赠品明细合计
    getSummaries({ columns, data }) {
      // 返回一个二维数组的表尾合计
      const B = [
        // 金额合计、本位币金额合计、折扣额合计、本位币折扣额合计、折后金额、本位币折后金额、税额、本位币税额、未税金额、本位币未税金额、数量合计
        'num',
        'stockMoney'
      ]
      const footData =
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '合计'
          }
          const findItem = B.find(item => item === column.field)
          if (findItem) {
            // return this.formattedNumber('0,0.000000', this.sumNum(data, findItem))
            return this.sumNum(data, findItem)
          }
          return '-'
        })
      return [footData]
    },
    // 底部上一步按钮
    handleUp() {
      if (Number(this.activeName) > 0) {
        this.activeName = Number(this.activeName) - 1 + ''
      }
      if (this.activeName === '3') {
        console.log('按钮变成保存')
      }
    },
    // 底部下一步按钮
    handleNext() {
      console.log(+this.activeName)
      if (+this.activeName < 3 && !this.isKit) {
        this.activeName = Number(this.activeName) + 1 + ''
      }
      if (+this.activeName === 3 && !this.isKit) {
        this.activeName = '4'
      }
      if (Number(this.activeName) <= 3 && this.isKit) {
        this.activeName = Number(this.activeName) + 1 + ''
      }
      if (this.activeName === '3') {
        console.log('按钮变成取消')
      }

      // this.activeName = 'second'
    },
    // 底部提交按钮
    async handleSubmit() {
      let selectedGifts

      if (this.formModelBase.orderType === 1 && this.giftListIsNull === false) {
        selectedGifts = this.$refs.giftDetails.$refs.customTable.getCheckboxRecords()
      } else {
        selectedGifts = this.giftsTableData
      }

      console.log('selectedGifts >> ', selectedGifts)

      selectedGifts.forEach((item) => {
        item.type = 1
      })
      // 订单明细 -saleOutSourceDetails
      // 其他3个明细 saleOutDetails  type 2标准件明细 1赠品 3紧固件
      this.$loads.show()
      if (this.sourceOrderTableData.length === 0) {
        this.$loads.hidden()
        this.$notify.error({
          title: 'wrong',
          message: this.$t('zhangjx.dingdmxbnwk'),
          offset: 100
        })
        return
      }
      const errMap1 = await this.$refs.standardPartsDetails.$refs.customTable.fullValidate(true)
      const errMap2 = await this.$refs.giftDetails.$refs.customTable.fullValidate(true)
      const errMap3 = this.isKit ? await this.$refs.fastenerTable.$refs.customTable.fullValidate(true) : undefined
      const errMap4 = await this.$refs.afterSalesDetails.$refs.customTable.fullValidate(true)
      if (errMap1 || errMap2 || errMap3 || errMap4) {
        this.$notify.error({
          title: 'error',
          message: this.$t('z_date20240606.mingxkqhwbnwk'),
          duration: 3000
        })
        this.$loads.hidden()
        return false
      }
      this.$refs.formBase.validate().then(valid => {
        console.log('valid===', valid)
        let transArr = []
        if (this.isKit) {
          const isEveryBom = this.sourceOrderTableData.some(item => {
            return !item.isBom
          })
          if (isEveryBom) {
            this.$notify.error({
              title: 'error',
              message: this.$t('zhangjx.dingdmxczfbmx'),
              duration: 3000
            })
            this.$loads.hidden()
            this.activeName = '0'
            return
          }
          transArr = [...selectedGifts, ...this.standardPartsTableData, ...this.fastenerTableData, ...this.afterSalesTableData]
        } else {
          transArr = [...selectedGifts, ...this.standardPartsTableData, ...this.afterSalesTableData]
        }
        if (valid) {
          for (let index = 0; index < transArr.length; index++) {
            const item = transArr[index]
            delete item.costPrice
            delete item.costMoney
            if (item.parentId) {
              item.parentId = JSON.stringify(item.parentId)
              item.sourceNumber = this.sourceOrderTableData[0].sourceNumber
            }
            if (item.isSingle === 1) {
              if (!item.singleNumbers || (item.singleNumbers.length !== +item.outQuantity)) {
                this.$notify.error({
                  title: 'error',
                  message: this.$t('zhangjx.dangqmxczwyh'),
                  duration: 3000
                })
                this.$loads.hidden()
                return
              }
            }
          }
          console.log('transArr====', transArr)
          if (this.formModelBase.targetType === 1) {
            this.formModelBase.repositoryId = this.repositoryId1
          }
          if (this.pageType === 'add') {
            addSalesOutBound({
              ...this.formModelBase,
              tax: this.tax,
              sourceNumber: this.sourceOrderTableData[0].sourceNumber,
              saleOutDetails: transArr,
              saleOutSourceDetails: this.sourceOrderTableData
            }).then(res => {
              if (res.data.ret === 200) {
                this.$loads.hidden()
                this.$notify({
                  title: 'successful',
                  message: this.$t('date20240227.xinjcg'),
                  type: 'success',
                  offset: 100
                })
                Object.assign(this.$data, this.$options.data.call(this))
                this.$store.dispatch('tagsView/delView', this.viewData).then(({ visitedViews }) => {
                  this.$router.push({
                    path: '/salesManagement/salesOutBound/salesOutBoundQuery'
                  })
                })
              } else {
                this.$loads.hidden()
                this.$notify.error({
                  title: 'wrong',
                  message: res.data.msg,
                  offset: 100
                })
              }
            })
          }
          if (this.pageType === 'edit') {
            console.log('编辑开始==')
            updateSalesOutBound({
              ...this.formModelBase,
              id: this.id,
              tax: this.tax,
              sourceNumber: this.sourceOrderTableData[0].sourceNumber,
              saleOutDetails: transArr,
              saleOutSourceDetails: this.sourceOrderTableData
            }).then(res => {
              if (res.data.ret === 200) {
                this.$loads.hidden()
                this.$notify({
                  title: 'successful',
                  message: this.$t('date20240227.xiugcg'),
                  type: 'success',
                  offset: 100
                })
                Object.assign(this.$data, this.$options.data.call(this))
                this.$store.dispatch('tagsView/delView', this.viewData).then(({ visitedViews }) => {
                  this.$router.push({
                    path: '/salesManagement/salesOutBound/salesOutBoundQuery'
                  })
                })
              } else {
                this.$loads.hidden()
                this.$notify.error({
                  title: 'wrong',
                  message: res.data.msg,
                  offset: 100
                })
              }
            })
          }
        } else {
          this.$loads.hidden()
          this.$notify.error({
            title: 'wrong',
            message: this.$t('date20240227.xinxbwz'),
            offset: 100
          })
        }
      }).catch(() => {
        this.$loads.hidden()
        this.$notify.error({
          title: 'error',
          message: this.$t('date20240227.jiaoywtg'),
          duration: 3000
        })
      })
    },
    // 底部取消按钮
    handleCancel() {
      this.$router.push({
        path: '/salesManagement/salesOutBound/salesOutBoundQuery'
      })
    },
    // 设置制单日期
    setCreateDate() {
      const time = new Date()
      const year = time.getFullYear()
      const month = (time.getMonth() + 1).toString().padStart(2, '0')
      const date = (time.getDate()).toString().padStart(2, '0')
      this.sheetCreateDate = year + '-' + month + '-' + date
    },
    // 设置制单人
    setCreateMan() {
      // console.log('vuex===', this.$store.getters.userInfo)
      const userInfo = this.$store.getters.userInfo
      this.sheetCreateMan = userInfo.userName
      this.sheetCreateManId = userInfo.empId
      // 调价人初始默认为制单人
      this.formModelBase.tiaojiarenId = userInfo.empId
      this.formModelBase.orgName = userInfo.orgName
      this.formModelBase.orgId = userInfo.orgId
    },
    next() {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
<style scoped lang="scss">
.buttons {
  text-align: right
}
</style>
