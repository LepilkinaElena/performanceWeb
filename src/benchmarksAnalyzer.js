if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'benchmarksAnalyzer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'benchmarksAnalyzer'.");
}
var benchmarksAnalyzer = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwCCE = Kotlin.throwCCE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var Unit = Kotlin.kotlin.Unit;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Map = Kotlin.kotlin.collections.Map;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var List = Kotlin.kotlin.collections.List;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var toChar = Kotlin.toChar;
  var unboxChar = Kotlin.unboxChar;
  var String_0 = Kotlin.kotlin.text.String_8chfmy$;
  var copyOf = Kotlin.kotlin.collections.copyOf_gtcw5h$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_j4ogox$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var toShort = Kotlin.toShort;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var substringBefore_0 = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var substringAfter_0 = Kotlin.kotlin.text.substringAfter_8cymmc$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var sum = Kotlin.kotlin.collections.sum_l63kqw$;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var sort = Kotlin.primitiveArraySort;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var union = Kotlin.kotlin.collections.union_q4559j$;
  var Pair = Kotlin.kotlin.Pair;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var asSequence = Kotlin.kotlin.collections.asSequence_abgq59$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var filterNotNull = Kotlin.kotlin.sequences.filterNotNull_q2m9h7$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var throwUPAE = Kotlin.throwUPAE;
  var Any = Object;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_sgbm27$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var maxOf = Kotlin.kotlin.comparisons.maxOf_sdesaw$;
  var minOf = Kotlin.kotlin.comparisons.minOf_sdesaw$;
  var Annotation = Kotlin.kotlin.Annotation;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var first_0 = Kotlin.kotlin.collections.first_7wnvza$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var numberToInt = Kotlin.numberToInt;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var math = Kotlin.kotlin.math;
  var padEnd = Kotlin.kotlin.text.padEnd_vrc1nu$;
  Compiler$BackendType.prototype = Object.create(Enum.prototype);
  Compiler$BackendType.prototype.constructor = Compiler$BackendType;
  BenchmarkResult$Status.prototype = Object.create(Enum.prototype);
  BenchmarkResult$Status.prototype.constructor = BenchmarkResult$Status;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonInvalidValueInStrictModeException.prototype = Object.create(Exception.prototype);
  JsonInvalidValueInStrictModeException.prototype.constructor = JsonInvalidValueInStrictModeException;
  JsonUnknownKeyException.prototype = Object.create(Exception.prototype);
  JsonUnknownKeyException.prototype.constructor = JsonUnknownKeyException;
  JsonParsingException.prototype = Object.create(Exception.prototype);
  JsonParsingException.prototype.constructor = JsonParsingException;
  JsonElementTypeMismatchException.prototype = Object.create(Exception.prototype);
  JsonElementTypeMismatchException.prototype.constructor = JsonElementTypeMismatchException;
  BintrayConnector.prototype = Object.create(Connector.prototype);
  BintrayConnector.prototype.constructor = BintrayConnector;
  TeamCityConnector.prototype = Object.create(Connector.prototype);
  TeamCityConnector.prototype.constructor = TeamCityConnector;
  ArgType$Boolean.prototype = Object.create(ArgType.prototype);
  ArgType$Boolean.prototype.constructor = ArgType$Boolean;
  ArgType$String.prototype = Object.create(ArgType.prototype);
  ArgType$String.prototype.constructor = ArgType$String;
  ArgType$Int.prototype = Object.create(ArgType.prototype);
  ArgType$Int.prototype.constructor = ArgType$Int;
  ArgType$Double.prototype = Object.create(ArgType.prototype);
  ArgType$Double.prototype.constructor = ArgType$Double;
  ArgType$Choice.prototype = Object.create(ArgType.prototype);
  ArgType$Choice.prototype.constructor = ArgType$Choice;
  OptionDescriptor.prototype = Object.create(Descriptor.prototype);
  OptionDescriptor.prototype.constructor = OptionDescriptor;
  ArgDescriptor.prototype = Object.create(Descriptor.prototype);
  ArgDescriptor.prototype.constructor = ArgDescriptor;
  TagWithText.prototype = Object.create(Tag.prototype);
  TagWithText.prototype.constructor = TagWithText;
  HTML.prototype = Object.create(TagWithText.prototype);
  HTML.prototype.constructor = HTML;
  Head.prototype = Object.create(TagWithText.prototype);
  Head.prototype.constructor = Head;
  Title.prototype = Object.create(TagWithText.prototype);
  Title.prototype.constructor = Title;
  Link.prototype = Object.create(TagWithText.prototype);
  Link.prototype.constructor = Link;
  Script.prototype = Object.create(TagWithText.prototype);
  Script.prototype.constructor = Script;
  BodyTag.prototype = Object.create(TagWithText.prototype);
  BodyTag.prototype.constructor = BodyTag;
  BodyTagWithClass.prototype = Object.create(BodyTag.prototype);
  BodyTagWithClass.prototype.constructor = BodyTagWithClass;
  Body.prototype = Object.create(BodyTag.prototype);
  Body.prototype.constructor = Body;
  B.prototype = Object.create(BodyTag.prototype);
  B.prototype.constructor = B;
  P.prototype = Object.create(BodyTag.prototype);
  P.prototype.constructor = P;
  H1.prototype = Object.create(BodyTag.prototype);
  H1.prototype.constructor = H1;
  H2.prototype = Object.create(BodyTag.prototype);
  H2.prototype.constructor = H2;
  H4.prototype = Object.create(BodyTag.prototype);
  H4.prototype.constructor = H4;
  HR.prototype = Object.create(BodyTag.prototype);
  HR.prototype.constructor = HR;
  Div.prototype = Object.create(BodyTagWithClass.prototype);
  Div.prototype.constructor = Div;
  Header.prototype = Object.create(BodyTagWithClass.prototype);
  Header.prototype.constructor = Header;
  Button.prototype = Object.create(BodyTagWithClass.prototype);
  Button.prototype.constructor = Button;
  Span.prototype = Object.create(BodyTagWithClass.prototype);
  Span.prototype.constructor = Span;
  A.prototype = Object.create(BodyTag.prototype);
  A.prototype.constructor = A;
  Image.prototype = Object.create(BodyTag.prototype);
  Image.prototype.constructor = Image;
  TableTag.prototype = Object.create(BodyTag.prototype);
  TableTag.prototype.constructor = TableTag;
  TableBlock.prototype = Object.create(TableTag.prototype);
  TableBlock.prototype.constructor = TableBlock;
  Table.prototype = Object.create(TableTag.prototype);
  Table.prototype.constructor = Table;
  THead.prototype = Object.create(TableBlock.prototype);
  THead.prototype.constructor = THead;
  TFoot.prototype = Object.create(TableBlock.prototype);
  TFoot.prototype.constructor = TFoot;
  TBody.prototype = Object.create(TableBlock.prototype);
  TBody.prototype.constructor = TBody;
  TableRowTag.prototype = Object.create(TableBlock.prototype);
  TableRowTag.prototype.constructor = TableRowTag;
  TableRow.prototype = Object.create(TableRowTag.prototype);
  TableRow.prototype.constructor = TableRow;
  TableHeadInfo.prototype = Object.create(TableRowTag.prototype);
  TableHeadInfo.prototype.constructor = TableHeadInfo;
  TableDataInfo.prototype = Object.create(TableRowTag.prototype);
  TableDataInfo.prototype.constructor = TableDataInfo;
  HTMLRender.prototype = Object.create(Render.prototype);
  HTMLRender.prototype.constructor = HTMLRender;
  TextRender.prototype = Object.create(Render.prototype);
  TextRender.prototype.constructor = TextRender;
  TeamCityStatisticsRender.prototype = Object.create(Render.prototype);
  TeamCityStatisticsRender.prototype.constructor = TeamCityStatisticsRender;
  function JsonSerializable() {
  }
  function JsonSerializable$arrayToJson$lambda(it) {
    return Kotlin.isType(it, JsonSerializable) ? it.toJson() : toString(it);
  }
  JsonSerializable.prototype.arrayToJson_yl67zr$ = function (data) {
    return joinToString(data, void 0, '[', ']', void 0, void 0, JsonSerializable$arrayToJson$lambda);
  };
  JsonSerializable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsonSerializable',
    interfaces: []
  };
  function EntityFromJsonFactory() {
  }
  EntityFromJsonFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EntityFromJsonFactory',
    interfaces: [ConvertedFromJson]
  };
  function BenchmarksReport(env, benchmarksList, compiler) {
    BenchmarksReport$Companion_getInstance();
    this.env = env;
    this.compiler = compiler;
    this.benchmarks = BenchmarksReport$Companion_getInstance().structBenchmarks_0(benchmarksList);
  }
  function BenchmarksReport$Companion() {
    BenchmarksReport$Companion_instance = this;
  }
  BenchmarksReport$Companion.prototype.create_m30icm$ = function (data) {
    if (Kotlin.isType(data, JsonObject)) {
      var env = Environment$Companion_getInstance().create_m30icm$(getRequiredField(data, 'env'));
      var benchmarksObj = getRequiredField(data, 'benchmarks');
      var compiler = Compiler$Companion_getInstance().create_m30icm$(getRequiredField(data, 'kotlin'));
      var benchmarksList = this.parseBenchmarksArray_m30icm$(benchmarksObj);
      return new BenchmarksReport(env, benchmarksList, compiler);
    }
     else {
      throw IllegalStateException_init('Top level entity is expected to be an object. Please, check origin files.'.toString());
    }
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  BenchmarksReport$Companion.prototype.parseBenchmarksArray_m30icm$ = function (data) {
    if (Kotlin.isType(data, JsonArray)) {
      var $receiver = data.jsonArray;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$(BenchmarkResult$Companion_getInstance().create_m30icm$(Kotlin.isType(tmp$_0 = item, JsonObject) ? tmp$_0 : throwCCE()));
      }
      return destination;
    }
     else {
      throw IllegalStateException_init('Benchmarks field is expected to be an array. Please, check origin files.'.toString());
    }
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  BenchmarksReport$Companion.prototype.structBenchmarks_0 = function (benchmarksList) {
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = benchmarksList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.name;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    return destination;
  };
  BenchmarksReport$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [EntityFromJsonFactory]
  };
  var BenchmarksReport$Companion_instance = null;
  function BenchmarksReport$Companion_getInstance() {
    if (BenchmarksReport$Companion_instance === null) {
      new BenchmarksReport$Companion();
    }
    return BenchmarksReport$Companion_instance;
  }
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  BenchmarksReport.prototype.toJson = function () {
    var tmp$ = '\n' + '        {' + '\n' + '            ' + '"' + 'env' + '"' + ': ' + this.env.toJson() + ',' + '\n' + '            ' + '"' + 'kotlin' + '"' + ': ' + this.compiler.toJson() + ',' + '\n' + '            ' + '"' + 'benchmarks' + '"' + ': ';
    var $receiver = this.benchmarks;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.value;
      addAll(destination, list);
    }
    return tmp$ + this.arrayToJson_yl67zr$(destination) + '\n' + '        }' + '\n' + '        ';
  };
  BenchmarksReport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BenchmarksReport',
    interfaces: [JsonSerializable]
  };
  function Compiler(backend, kotlinVersion) {
    Compiler$Companion_getInstance();
    this.backend = backend;
    this.kotlinVersion = kotlinVersion;
  }
  function Compiler$BackendType(name, ordinal, type) {
    Enum.call(this);
    this.type = type;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Compiler$BackendType_initFields() {
    Compiler$BackendType_initFields = function () {
    };
    Compiler$BackendType$JVM_instance = new Compiler$BackendType('JVM', 0, 'jvm');
    Compiler$BackendType$NATIVE_instance = new Compiler$BackendType('NATIVE', 1, 'native');
  }
  var Compiler$BackendType$JVM_instance;
  function Compiler$BackendType$JVM_getInstance() {
    Compiler$BackendType_initFields();
    return Compiler$BackendType$JVM_instance;
  }
  var Compiler$BackendType$NATIVE_instance;
  function Compiler$BackendType$NATIVE_getInstance() {
    Compiler$BackendType_initFields();
    return Compiler$BackendType$NATIVE_instance;
  }
  Compiler$BackendType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackendType',
    interfaces: [Enum]
  };
  function Compiler$BackendType$values() {
    return [Compiler$BackendType$JVM_getInstance(), Compiler$BackendType$NATIVE_getInstance()];
  }
  Compiler$BackendType.values = Compiler$BackendType$values;
  function Compiler$BackendType$valueOf(name) {
    switch (name) {
      case 'JVM':
        return Compiler$BackendType$JVM_getInstance();
      case 'NATIVE':
        return Compiler$BackendType$NATIVE_getInstance();
      default:throwISE('No enum constant org.jetbrains.report.Compiler.BackendType.' + name);
    }
  }
  Compiler$BackendType.valueOf_61zpoe$ = Compiler$BackendType$valueOf;
  function Compiler$Companion() {
    Compiler$Companion_instance = this;
  }
  Compiler$Companion.prototype.create_m30icm$ = function (data) {
    if (Kotlin.isType(data, JsonObject)) {
      var backend = Compiler$Backend$Companion_getInstance().create_m30icm$(getRequiredField(data, 'backend'));
      var kotlinVersion = this.elementToString_4kkq6g$(getRequiredField(data, 'kotlinVersion'), 'kotlinVersion');
      return new Compiler(backend, kotlinVersion);
    }
     else {
      throw IllegalStateException_init('Kotlin entity is expected to be an object. Please, check origin files.'.toString());
    }
  };
  Compiler$Companion.prototype.backendTypeFromString_61zpoe$ = function (s) {
    var $receiver = Compiler$BackendType$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.type, s)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  Compiler$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [EntityFromJsonFactory]
  };
  var Compiler$Companion_instance = null;
  function Compiler$Companion_getInstance() {
    if (Compiler$Companion_instance === null) {
      new Compiler$Companion();
    }
    return Compiler$Companion_instance;
  }
  function Compiler$Backend(type, version, flags) {
    Compiler$Backend$Companion_getInstance();
    this.type = type;
    this.version = version;
    this.flags = flags;
  }
  function Compiler$Backend$Companion() {
    Compiler$Backend$Companion_instance = this;
  }
  Compiler$Backend$Companion.prototype.create_m30icm$ = function (data) {
    var tmp$;
    if (Kotlin.isType(data, JsonObject)) {
      var typeElement = getRequiredField(data, 'type');
      if (Kotlin.isType(typeElement, JsonLiteral)) {
        var tmp$_0;
        if ((tmp$ = Compiler$Companion_getInstance().backendTypeFromString_61zpoe$(typeElement.unquoted())) != null)
          tmp$_0 = tmp$;
        else {
          throw IllegalStateException_init("Backend type should be 'jvm' or 'native'".toString());
        }
        var type = tmp$_0;
        var version = this.elementToString_4kkq6g$(getRequiredField(data, 'version'), 'version');
        var flagsArray = getOptionalField(data, 'flags');
        var flags = emptyList();
        if (flagsArray != null && Kotlin.isType(flagsArray, JsonArray)) {
          var $receiver = flagsArray.jsonArray;
          var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
          var tmp$_1;
          tmp$_1 = $receiver.iterator();
          while (tmp$_1.hasNext()) {
            var item = tmp$_1.next();
            destination.add_11rb$(item.toString());
          }
          flags = destination;
        }
        return new Compiler$Backend(type, version, flags);
      }
       else {
        throw IllegalStateException_init('Backend type should be string literal.'.toString());
      }
    }
     else {
      throw IllegalStateException_init('Backend entity is expected to be an object. Please, check origin files.'.toString());
    }
  };
  Compiler$Backend$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [EntityFromJsonFactory]
  };
  var Compiler$Backend$Companion_instance = null;
  function Compiler$Backend$Companion_getInstance() {
    if (Compiler$Backend$Companion_instance === null) {
      new Compiler$Backend$Companion();
    }
    return Compiler$Backend$Companion_instance;
  }
  Compiler$Backend.prototype.toJson = function () {
    var result = '\n' + '            {' + '\n' + '                ' + '"' + 'type' + '"' + ': ' + '"' + this.type.type + '"' + ',' + '\n' + '                ' + '"' + 'version' + '"' + ': ' + '"' + this.version + '"';
    if (this.flags.isEmpty()) {
      return result + '\n' + '                }';
    }
     else {
      return '\n' + '                    ' + result + ',' + '\n' + '                ' + '"' + 'flags' + '"' + ': ' + this.arrayToJson_yl67zr$(this.flags) + '\n' + '                }' + '\n' + '                ';
    }
  };
  Compiler$Backend.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Backend',
    interfaces: [JsonSerializable]
  };
  Compiler$Backend.prototype.component1 = function () {
    return this.type;
  };
  Compiler$Backend.prototype.component2 = function () {
    return this.version;
  };
  Compiler$Backend.prototype.component3 = function () {
    return this.flags;
  };
  Compiler$Backend.prototype.copy_vr6xrk$ = function (type, version, flags) {
    return new Compiler$Backend(type === void 0 ? this.type : type, version === void 0 ? this.version : version, flags === void 0 ? this.flags : flags);
  };
  Compiler$Backend.prototype.toString = function () {
    return 'Backend(type=' + Kotlin.toString(this.type) + (', version=' + Kotlin.toString(this.version)) + (', flags=' + Kotlin.toString(this.flags)) + ')';
  };
  Compiler$Backend.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    return result;
  };
  Compiler$Backend.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.version, other.version) && Kotlin.equals(this.flags, other.flags)))));
  };
  Compiler.prototype.toJson = function () {
    return '\n' + '        {' + '\n' + '            ' + '"' + 'backend' + '"' + ': ' + this.backend.toJson() + ',' + '\n' + '            ' + '"' + 'kotlinVersion' + '"' + ': ' + '"' + this.kotlinVersion + '"' + '\n' + '        }' + '\n' + '        ';
  };
  Compiler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Compiler',
    interfaces: [JsonSerializable]
  };
  Compiler.prototype.component1 = function () {
    return this.backend;
  };
  Compiler.prototype.component2 = function () {
    return this.kotlinVersion;
  };
  Compiler.prototype.copy_nr335b$ = function (backend, kotlinVersion) {
    return new Compiler(backend === void 0 ? this.backend : backend, kotlinVersion === void 0 ? this.kotlinVersion : kotlinVersion);
  };
  Compiler.prototype.toString = function () {
    return 'Compiler(backend=' + Kotlin.toString(this.backend) + (', kotlinVersion=' + Kotlin.toString(this.kotlinVersion)) + ')';
  };
  Compiler.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.backend) | 0;
    result = result * 31 + Kotlin.hashCode(this.kotlinVersion) | 0;
    return result;
  };
  Compiler.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.backend, other.backend) && Kotlin.equals(this.kotlinVersion, other.kotlinVersion)))));
  };
  function Environment(machine, jdk) {
    Environment$Companion_getInstance();
    this.machine = machine;
    this.jdk = jdk;
  }
  function Environment$Companion() {
    Environment$Companion_instance = this;
  }
  Environment$Companion.prototype.create_m30icm$ = function (data) {
    if (Kotlin.isType(data, JsonObject)) {
      var machine = Environment$Machine$Companion_getInstance().create_m30icm$(getRequiredField(data, 'machine'));
      var jdk = Environment$JDKInstance$Companion_getInstance().create_m30icm$(getRequiredField(data, 'jdk'));
      return new Environment(machine, jdk);
    }
     else {
      throw IllegalStateException_init('Environment entity is expected to be an object. Please, check origin files.'.toString());
    }
  };
  Environment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [EntityFromJsonFactory]
  };
  var Environment$Companion_instance = null;
  function Environment$Companion_getInstance() {
    if (Environment$Companion_instance === null) {
      new Environment$Companion();
    }
    return Environment$Companion_instance;
  }
  function Environment$Machine(cpu, os) {
    Environment$Machine$Companion_getInstance();
    this.cpu = cpu;
    this.os = os;
  }
  function Environment$Machine$Companion() {
    Environment$Machine$Companion_instance = this;
  }
  Environment$Machine$Companion.prototype.create_m30icm$ = function (data) {
    if (Kotlin.isType(data, JsonObject)) {
      var cpu = this.elementToString_4kkq6g$(getRequiredField(data, 'cpu'), 'cpu');
      var os = this.elementToString_4kkq6g$(getRequiredField(data, 'os'), 'os');
      return new Environment$Machine(cpu, os);
    }
     else {
      throw IllegalStateException_init('Machine entity is expected to be an object. Please, check origin files.'.toString());
    }
  };
  Environment$Machine$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [EntityFromJsonFactory]
  };
  var Environment$Machine$Companion_instance = null;
  function Environment$Machine$Companion_getInstance() {
    if (Environment$Machine$Companion_instance === null) {
      new Environment$Machine$Companion();
    }
    return Environment$Machine$Companion_instance;
  }
  Environment$Machine.prototype.toJson = function () {
    return '\n' + '            {' + '\n' + '                ' + '"' + 'cpu' + '"' + ': ' + '"' + this.cpu + '"' + ',' + '\n' + '                ' + '"' + 'os' + '"' + ': ' + '"' + this.os + '"' + '\n' + '            }' + '\n' + '            ';
  };
  Environment$Machine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Machine',
    interfaces: [JsonSerializable]
  };
  Environment$Machine.prototype.component1 = function () {
    return this.cpu;
  };
  Environment$Machine.prototype.component2 = function () {
    return this.os;
  };
  Environment$Machine.prototype.copy_puj7f4$ = function (cpu, os) {
    return new Environment$Machine(cpu === void 0 ? this.cpu : cpu, os === void 0 ? this.os : os);
  };
  Environment$Machine.prototype.toString = function () {
    return 'Machine(cpu=' + Kotlin.toString(this.cpu) + (', os=' + Kotlin.toString(this.os)) + ')';
  };
  Environment$Machine.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cpu) | 0;
    result = result * 31 + Kotlin.hashCode(this.os) | 0;
    return result;
  };
  Environment$Machine.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cpu, other.cpu) && Kotlin.equals(this.os, other.os)))));
  };
  function Environment$JDKInstance(version, vendor) {
    Environment$JDKInstance$Companion_getInstance();
    this.version = version;
    this.vendor = vendor;
  }
  function Environment$JDKInstance$Companion() {
    Environment$JDKInstance$Companion_instance = this;
  }
  Environment$JDKInstance$Companion.prototype.create_m30icm$ = function (data) {
    if (Kotlin.isType(data, JsonObject)) {
      var version = this.elementToString_4kkq6g$(getRequiredField(data, 'version'), 'version');
      var vendor = this.elementToString_4kkq6g$(getRequiredField(data, 'vendor'), 'vendor');
      return new Environment$JDKInstance(version, vendor);
    }
     else {
      throw IllegalStateException_init('JDK entity is expected to be an object. Please, check origin files.'.toString());
    }
  };
  Environment$JDKInstance$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [EntityFromJsonFactory]
  };
  var Environment$JDKInstance$Companion_instance = null;
  function Environment$JDKInstance$Companion_getInstance() {
    if (Environment$JDKInstance$Companion_instance === null) {
      new Environment$JDKInstance$Companion();
    }
    return Environment$JDKInstance$Companion_instance;
  }
  Environment$JDKInstance.prototype.toJson = function () {
    return '\n' + '            {' + '\n' + '                ' + '"' + 'version' + '"' + ': ' + '"' + this.version + '"' + ',' + '\n' + '                ' + '"' + 'vendor' + '"' + ': ' + '"' + this.vendor + '"' + '\n' + '            }' + '\n' + '            ';
  };
  Environment$JDKInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JDKInstance',
    interfaces: [JsonSerializable]
  };
  Environment$JDKInstance.prototype.component1 = function () {
    return this.version;
  };
  Environment$JDKInstance.prototype.component2 = function () {
    return this.vendor;
  };
  Environment$JDKInstance.prototype.copy_puj7f4$ = function (version, vendor) {
    return new Environment$JDKInstance(version === void 0 ? this.version : version, vendor === void 0 ? this.vendor : vendor);
  };
  Environment$JDKInstance.prototype.toString = function () {
    return 'JDKInstance(version=' + Kotlin.toString(this.version) + (', vendor=' + Kotlin.toString(this.vendor)) + ')';
  };
  Environment$JDKInstance.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.vendor) | 0;
    return result;
  };
  Environment$JDKInstance.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.version, other.version) && Kotlin.equals(this.vendor, other.vendor)))));
  };
  Environment.prototype.toJson = function () {
    return '\n' + '            {' + '\n' + '                ' + '"' + 'machine' + '"' + ': ' + this.machine.toJson() + ',' + '\n' + '                ' + '"' + 'jdk' + '"' + ': ' + this.jdk.toJson() + '\n' + '            }' + '\n' + '            ';
  };
  Environment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Environment',
    interfaces: [JsonSerializable]
  };
  Environment.prototype.component1 = function () {
    return this.machine;
  };
  Environment.prototype.component2 = function () {
    return this.jdk;
  };
  Environment.prototype.copy_gqqxh1$ = function (machine, jdk) {
    return new Environment(machine === void 0 ? this.machine : machine, jdk === void 0 ? this.jdk : jdk);
  };
  Environment.prototype.toString = function () {
    return 'Environment(machine=' + Kotlin.toString(this.machine) + (', jdk=' + Kotlin.toString(this.jdk)) + ')';
  };
  Environment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.machine) | 0;
    result = result * 31 + Kotlin.hashCode(this.jdk) | 0;
    return result;
  };
  Environment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.machine, other.machine) && Kotlin.equals(this.jdk, other.jdk)))));
  };
  function BenchmarkResult(name, status, score, runtimeInUs, repeat, warmup) {
    BenchmarkResult$Companion_getInstance();
    this.name = name;
    this.status = status;
    this.score = score;
    this.runtimeInUs = runtimeInUs;
    this.repeat = repeat;
    this.warmup = warmup;
  }
  function BenchmarkResult$Companion() {
    BenchmarkResult$Companion_instance = this;
  }
  BenchmarkResult$Companion.prototype.create_m30icm$ = function (data) {
    var tmp$;
    if (Kotlin.isType(data, JsonObject)) {
      var name = this.elementToString_4kkq6g$(getRequiredField(data, 'name'), 'name');
      var statusElement = getRequiredField(data, 'status');
      if (Kotlin.isType(statusElement, JsonLiteral)) {
        var tmp$_0;
        if ((tmp$ = this.statusFromString_61zpoe$(statusElement.unquoted())) != null)
          tmp$_0 = tmp$;
        else {
          throw IllegalStateException_init('Status should be PASSED or FAILED'.toString());
        }
        var status = tmp$_0;
        var score = this.elementToDouble_4kkq6g$(getRequiredField(data, 'score'), 'score');
        var runtimeInUs = this.elementToDouble_4kkq6g$(getRequiredField(data, 'runtimeInUs'), 'runtimeInUs');
        var repeat = this.elementToInt_4kkq6g$(getRequiredField(data, 'repeat'), 'repeat');
        var warmup = this.elementToInt_4kkq6g$(getRequiredField(data, 'warmup'), 'warmup');
        return new BenchmarkResult(name, status, score, runtimeInUs, repeat, warmup);
      }
       else {
        throw IllegalStateException_init('Status should be string literal.'.toString());
      }
    }
     else {
      throw IllegalStateException_init('Benchmark entity is expected to be an object. Please, check origin files.'.toString());
    }
  };
  BenchmarkResult$Companion.prototype.statusFromString_61zpoe$ = function (s) {
    var $receiver = BenchmarkResult$Status$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.value, s)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  BenchmarkResult$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [EntityFromJsonFactory]
  };
  var BenchmarkResult$Companion_instance = null;
  function BenchmarkResult$Companion_getInstance() {
    if (BenchmarkResult$Companion_instance === null) {
      new BenchmarkResult$Companion();
    }
    return BenchmarkResult$Companion_instance;
  }
  function BenchmarkResult$Status(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BenchmarkResult$Status_initFields() {
    BenchmarkResult$Status_initFields = function () {
    };
    BenchmarkResult$Status$PASSED_instance = new BenchmarkResult$Status('PASSED', 0, 'PASSED');
    BenchmarkResult$Status$FAILED_instance = new BenchmarkResult$Status('FAILED', 1, 'FAILED');
  }
  var BenchmarkResult$Status$PASSED_instance;
  function BenchmarkResult$Status$PASSED_getInstance() {
    BenchmarkResult$Status_initFields();
    return BenchmarkResult$Status$PASSED_instance;
  }
  var BenchmarkResult$Status$FAILED_instance;
  function BenchmarkResult$Status$FAILED_getInstance() {
    BenchmarkResult$Status_initFields();
    return BenchmarkResult$Status$FAILED_instance;
  }
  BenchmarkResult$Status.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Status',
    interfaces: [Enum]
  };
  function BenchmarkResult$Status$values() {
    return [BenchmarkResult$Status$PASSED_getInstance(), BenchmarkResult$Status$FAILED_getInstance()];
  }
  BenchmarkResult$Status.values = BenchmarkResult$Status$values;
  function BenchmarkResult$Status$valueOf(name) {
    switch (name) {
      case 'PASSED':
        return BenchmarkResult$Status$PASSED_getInstance();
      case 'FAILED':
        return BenchmarkResult$Status$FAILED_getInstance();
      default:throwISE('No enum constant org.jetbrains.report.BenchmarkResult.Status.' + name);
    }
  }
  BenchmarkResult$Status.valueOf_61zpoe$ = BenchmarkResult$Status$valueOf;
  BenchmarkResult.prototype.toJson = function () {
    return '\n' + '        {' + '\n' + '            ' + '"' + 'name' + '"' + ': ' + '"' + this.name + '"' + ',' + '\n' + '            ' + '"' + 'status' + '"' + ': ' + '"' + this.status.value + '"' + ',' + '\n' + '            ' + '"' + 'score' + '"' + ': ' + this.score + ',' + '\n' + '            ' + '"' + 'runtimeInUs' + '"' + ': ' + this.runtimeInUs + ',' + '\n' + '            ' + '"' + 'repeat' + '"' + ': ' + this.repeat + ',' + '\n' + '            ' + '"' + 'warmup' + '"' + ': ' + this.warmup + '\n' + '        }' + '\n' + '        ';
  };
  BenchmarkResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BenchmarkResult',
    interfaces: [JsonSerializable]
  };
  function BenchmarkResult_init(name, score, $this) {
    $this = $this || Object.create(BenchmarkResult.prototype);
    BenchmarkResult.call($this, name, BenchmarkResult$Status$PASSED_getInstance(), score, 0.0, 0, 0);
    return $this;
  }
  function ConvertedFromJson() {
  }
  ConvertedFromJson.prototype.elementToDouble_4kkq6g$ = function (element, name) {
    var tmp$;
    if (Kotlin.isType(element, JsonPrimitive))
      tmp$ = element.double;
    else {
      throw IllegalStateException_init(("Field '" + name + "' in '" + element + "' is expected to be a double number. Please, check origin files.").toString());
    }
    return tmp$;
  };
  ConvertedFromJson.prototype.elementToInt_4kkq6g$ = function (element, name) {
    var tmp$;
    if (Kotlin.isType(element, JsonPrimitive))
      tmp$ = element.int;
    else {
      throw IllegalStateException_init(("Field '" + name + "' in '" + element + "' is expected to be an integer number. Please, check origin files.").toString());
    }
    return tmp$;
  };
  ConvertedFromJson.prototype.elementToString_4kkq6g$ = function (element, name) {
    var tmp$;
    if (Kotlin.isType(element, JsonLiteral))
      tmp$ = element.unquoted();
    else {
      throw IllegalStateException_init(("Field '" + name + "' in '" + element + "' is expected to be a string. Please, check origin files.").toString());
    }
    return tmp$;
  };
  ConvertedFromJson.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ConvertedFromJson',
    interfaces: []
  };
  function getRequiredField($receiver, fieldName) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.getOrNull_61zpoe$(fieldName)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Field '" + fieldName + "' doesn't exist in '" + $receiver + "'. Please, check origin files.").toString());
    }
    return tmp$_0;
  }
  function getOptionalField($receiver, fieldName) {
    return $receiver.getOrNull_61zpoe$(fieldName);
  }
  function JsonElement() {
  }
  Object.defineProperty(JsonElement.prototype, 'primitive', {
    get: function () {
      return this.error_f87qh0$_0('JsonLiteral');
    }
  });
  Object.defineProperty(JsonElement.prototype, 'jsonObject', {
    get: function () {
      return this.error_f87qh0$_0('JsonObject');
    }
  });
  Object.defineProperty(JsonElement.prototype, 'jsonArray', {
    get: function () {
      return this.error_f87qh0$_0('JsonArray');
    }
  });
  Object.defineProperty(JsonElement.prototype, 'jsonNull', {
    get: function () {
      return this.error_f87qh0$_0('JsonPrimitive');
    }
  });
  Object.defineProperty(JsonElement.prototype, 'isNull', {
    get: function () {
      return this === JsonNull_getInstance();
    }
  });
  JsonElement.prototype.error_f87qh0$_0 = function (element) {
    throw new JsonElementTypeMismatchException(Kotlin.getKClassFromExpression(this).toString(), element);
  };
  JsonElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonElement',
    interfaces: []
  };
  function JsonPrimitive() {
    JsonElement.call(this);
    this.primitive_w6mvww$_0 = this;
  }
  Object.defineProperty(JsonPrimitive.prototype, 'primitive', {
    get: function () {
      return this.primitive_w6mvww$_0;
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'int', {
    get: function () {
      return toInt(this.content);
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'intOrNull', {
    get: function () {
      return toIntOrNull(this.content);
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'long', {
    get: function () {
      return toLong(this.content);
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'longOrNull', {
    get: function () {
      return toLongOrNull(this.content);
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'double', {
    get: function () {
      return toDouble(this.content);
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'doubleOrNull', {
    get: function () {
      return toDoubleOrNull(this.content);
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'float', {
    get: function () {
      return toDouble(this.content);
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'floatOrNull', {
    get: function () {
      return toDoubleOrNull(this.content);
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'boolean', {
    get: function () {
      return toBooleanStrict(this.content);
    }
  });
  Object.defineProperty(JsonPrimitive.prototype, 'booleanOrNull', {
    get: function () {
      return toBooleanStrictOrNull(this.content);
    }
  });
  JsonPrimitive.prototype.toString = function () {
    return this.content;
  };
  JsonPrimitive.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonPrimitive',
    interfaces: [JsonElement]
  };
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.body_0 = body;
    this.isString_0 = isString;
    this.content_n7alqu$_0 = this.body_0.toString();
    this.contentOrNull_qjywto$_0 = this.content;
  }
  Object.defineProperty(JsonLiteral.prototype, 'content', {
    get: function () {
      return this.content_n7alqu$_0;
    }
  });
  Object.defineProperty(JsonLiteral.prototype, 'contentOrNull', {
    get: function () {
      return this.contentOrNull_qjywto$_0;
    }
  });
  JsonLiteral.prototype.toString = function () {
    var tmp$;
    if (this.isString_0) {
      var $receiver = StringBuilder_init();
      printQuoted($receiver, this.content);
      tmp$ = $receiver.toString();
    }
     else
      tmp$ = this.content;
    return tmp$;
  };
  JsonLiteral.prototype.unquoted = function () {
    return this.content;
  };
  JsonLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonLiteral',
    interfaces: [JsonPrimitive]
  };
  function JsonLiteral_init(number, $this) {
    $this = $this || Object.create(JsonLiteral.prototype);
    JsonLiteral.call($this, number, false);
    return $this;
  }
  function JsonLiteral_init_0(boolean, $this) {
    $this = $this || Object.create(JsonLiteral.prototype);
    JsonLiteral.call($this, boolean, false);
    return $this;
  }
  function JsonLiteral_init_1(string, $this) {
    $this = $this || Object.create(JsonLiteral.prototype);
    JsonLiteral.call($this, string, true);
    return $this;
  }
  JsonLiteral.prototype.component1_0 = function () {
    return this.body_0;
  };
  JsonLiteral.prototype.component2_0 = function () {
    return this.isString_0;
  };
  JsonLiteral.prototype.copy_j44yyw$ = function (body, isString) {
    return new JsonLiteral(body === void 0 ? this.body_0 : body, isString === void 0 ? this.isString_0 : isString);
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.body_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.isString_0) | 0;
    return result;
  };
  JsonLiteral.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.body_0, other.body_0) && Kotlin.equals(this.isString_0, other.isString_0)))));
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.jsonNull_ub1irq$_0 = this;
    this.content_2wem26$_0 = 'null';
    this.contentOrNull_knm86g$_0 = null;
  }
  Object.defineProperty(JsonNull.prototype, 'jsonNull', {
    get: function () {
      return this.jsonNull_ub1irq$_0;
    }
  });
  Object.defineProperty(JsonNull.prototype, 'content', {
    get: function () {
      return this.content_2wem26$_0;
    }
  });
  Object.defineProperty(JsonNull.prototype, 'contentOrNull', {
    get: function () {
      return this.contentOrNull_knm86g$_0;
    }
  });
  JsonNull.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonNull',
    interfaces: [JsonPrimitive]
  };
  var JsonNull_instance = null;
  function JsonNull_getInstance() {
    if (JsonNull_instance === null) {
      new JsonNull();
    }
    return JsonNull_instance;
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.content = content;
    this.jsonObject_lntlyy$_0 = this;
  }
  Object.defineProperty(JsonObject.prototype, 'jsonObject', {
    get: function () {
      return this.jsonObject_lntlyy$_0;
    }
  });
  JsonObject.prototype.get_11rb$ = function (key) {
    var tmp$;
    tmp$ = this.content.get_11rb$(key);
    if (tmp$ == null) {
      throw new NoSuchElementException('Element ' + key + ' is missing');
    }
    return tmp$;
  };
  JsonObject.prototype.getOrNull_61zpoe$ = function (key) {
    return this.content.get_11rb$(key);
  };
  JsonObject.prototype.getPrimitive_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.get_11rb$(key), JsonPrimitive) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, 'JsonPrimitive');
  };
  JsonObject.prototype.getObject_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.get_11rb$(key), JsonObject) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, 'JsonObject');
  };
  JsonObject.prototype.getArray_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.get_11rb$(key), JsonArray) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, 'JsonArray');
  };
  JsonObject.prototype.getPrimitiveOrNull_61zpoe$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.content.get_11rb$(key), JsonPrimitive) ? tmp$ : null;
  };
  JsonObject.prototype.getObjectOrNull_61zpoe$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.content.get_11rb$(key), JsonObject) ? tmp$ : null;
  };
  JsonObject.prototype.getArrayOrNull_61zpoe$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.content.get_11rb$(key), JsonArray) ? tmp$ : null;
  };
  JsonObject.prototype.getAs_xs6n0g$ = defineInlineFunction('benchmarksAnalyzer.org.jetbrains.report.json.JsonObject.getAs_xs6n0g$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var unexpectedJson = _.org.jetbrains.report.json.unexpectedJson_puj7f4$;
    return function (J_0, isJ, key) {
      var tmp$, tmp$_0;
      return (tmp$_0 = isJ(tmp$ = this.get_11rb$(key)) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, getKClass(J_0).toString());
    };
  }));
  JsonObject.prototype.lookup_xs6n0g$ = defineInlineFunction('benchmarksAnalyzer.org.jetbrains.report.json.JsonObject.lookup_xs6n0g$', function (J_0, isJ, key) {
    var tmp$;
    return isJ(tmp$ = this.content.get_11rb$(key)) ? tmp$ : null;
  });
  function JsonObject$toString$lambda(f) {
    var k = f.key;
    var v = f.value;
    return '"' + k + '"' + ': ' + v;
  }
  JsonObject.prototype.toString = function () {
    return joinToString(this.content.entries, void 0, '{', '}', void 0, void 0, JsonObject$toString$lambda);
  };
  Object.defineProperty(JsonObject.prototype, 'entries', {
    get: function () {
      return this.content.entries;
    }
  });
  Object.defineProperty(JsonObject.prototype, 'keys', {
    get: function () {
      return this.content.keys;
    }
  });
  Object.defineProperty(JsonObject.prototype, 'size', {
    get: function () {
      return this.content.size;
    }
  });
  Object.defineProperty(JsonObject.prototype, 'values', {
    get: function () {
      return this.content.values;
    }
  });
  JsonObject.prototype.containsKey_11rb$ = function (key) {
    return this.content.containsKey_11rb$(key);
  };
  JsonObject.prototype.containsValue_11rc$ = function (value) {
    return this.content.containsValue_11rc$(value);
  };
  JsonObject.prototype.isEmpty = function () {
    return this.content.isEmpty();
  };
  JsonObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonObject',
    interfaces: [Map, JsonElement]
  };
  JsonObject.prototype.component1 = function () {
    return this.content;
  };
  JsonObject.prototype.copy_gcfvpr$ = function (content) {
    return new JsonObject(content === void 0 ? this.content : content);
  };
  JsonObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  JsonObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  function JsonArray(content) {
    JsonElement.call(this);
    this.content = content;
    this.jsonArray_ixlct0$_0 = this;
  }
  Object.defineProperty(JsonArray.prototype, 'jsonArray', {
    get: function () {
      return this.jsonArray_ixlct0$_0;
    }
  });
  JsonArray.prototype.getPrimitive_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.content.get_za3lpa$(index), JsonPrimitive) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, 'JsonPrimitive');
  };
  JsonArray.prototype.getObject_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.content.get_za3lpa$(index), JsonObject) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, 'JsonObject');
  };
  JsonArray.prototype.getArray_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.content.get_za3lpa$(index), JsonArray) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, 'JsonArray');
  };
  JsonArray.prototype.getPrimitiveOrNull_za3lpa$ = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = getOrNull(this.content, index), JsonPrimitive) ? tmp$ : null;
  };
  JsonArray.prototype.getObjectOrNull_za3lpa$ = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = getOrNull(this.content, index), JsonObject) ? tmp$ : null;
  };
  JsonArray.prototype.getArrayOrNull_za3lpa$ = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = getOrNull(this.content, index), JsonArray) ? tmp$ : null;
  };
  JsonArray.prototype.getAs_28snxg$ = defineInlineFunction('benchmarksAnalyzer.org.jetbrains.report.json.JsonArray.getAs_28snxg$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var unexpectedJson = _.org.jetbrains.report.json.unexpectedJson_puj7f4$;
    return function (J_0, isJ, index) {
      var tmp$, tmp$_0;
      return (tmp$_0 = isJ(tmp$ = this.content.get_za3lpa$(index)) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, getKClass(J_0).toString());
    };
  }));
  JsonArray.prototype.getAsOrNull_28snxg$ = defineInlineFunction('benchmarksAnalyzer.org.jetbrains.report.json.JsonArray.getAsOrNull_28snxg$', wrapFunction(function () {
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    return function (J_0, isJ, index) {
      var tmp$;
      return isJ(tmp$ = getOrNull(this.content, index)) ? tmp$ : null;
    };
  }));
  JsonArray.prototype.toString = function () {
    return joinToString(this.content, void 0, '[', ']');
  };
  Object.defineProperty(JsonArray.prototype, 'size', {
    get: function () {
      return this.content.size;
    }
  });
  JsonArray.prototype.contains_11rb$ = function (element) {
    return this.content.contains_11rb$(element);
  };
  JsonArray.prototype.containsAll_brywnq$ = function (elements) {
    return this.content.containsAll_brywnq$(elements);
  };
  JsonArray.prototype.get_za3lpa$ = function (index) {
    return this.content.get_za3lpa$(index);
  };
  JsonArray.prototype.indexOf_11rb$ = function (element) {
    return this.content.indexOf_11rb$(element);
  };
  JsonArray.prototype.isEmpty = function () {
    return this.content.isEmpty();
  };
  JsonArray.prototype.iterator = function () {
    return this.content.iterator();
  };
  JsonArray.prototype.lastIndexOf_11rb$ = function (element) {
    return this.content.lastIndexOf_11rb$(element);
  };
  JsonArray.prototype.listIterator = function () {
    return this.content.listIterator();
  };
  JsonArray.prototype.listIterator_za3lpa$ = function (index) {
    return this.content.listIterator_za3lpa$(index);
  };
  JsonArray.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.content.subList_vux9f0$(fromIndex, toIndex);
  };
  JsonArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonArray',
    interfaces: [List, JsonElement]
  };
  JsonArray.prototype.component1 = function () {
    return this.content;
  };
  JsonArray.prototype.copy_bxl1jf$ = function (content) {
    return new JsonArray(content === void 0 ? this.content : content);
  };
  JsonArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  JsonArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  function unexpectedJson(key, expected) {
    throw new JsonElementTypeMismatchException(key, expected);
  }
  function JsonInvalidValueInStrictModeException(value, valueDescription) {
    Exception_init(value.toString() + ' is not a valid ' + valueDescription + ' as per JSON spec.' + '\n' + 'You can disable strict mode to serialize such values', this);
    this.name = 'JsonInvalidValueInStrictModeException';
  }
  JsonInvalidValueInStrictModeException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonInvalidValueInStrictModeException',
    interfaces: [Exception]
  };
  function JsonInvalidValueInStrictModeException_init(floatValue, $this) {
    $this = $this || Object.create(JsonInvalidValueInStrictModeException.prototype);
    JsonInvalidValueInStrictModeException.call($this, floatValue, 'float');
    return $this;
  }
  function JsonInvalidValueInStrictModeException_init_0(doubleValue, $this) {
    $this = $this || Object.create(JsonInvalidValueInStrictModeException.prototype);
    JsonInvalidValueInStrictModeException.call($this, doubleValue, 'double');
    return $this;
  }
  function JsonUnknownKeyException(key) {
    Exception_init('Strict JSON encountered unknown key: ' + key + '\n' + 'You can disable strict mode to skip unknown keys', this);
    this.name = 'JsonUnknownKeyException';
  }
  JsonUnknownKeyException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonUnknownKeyException',
    interfaces: [Exception]
  };
  function JsonParsingException(position, message) {
    Exception_init('Invalid JSON at ' + position + ': ' + message, this);
    this.name = 'JsonParsingException';
  }
  JsonParsingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonParsingException',
    interfaces: [Exception]
  };
  function JsonElementTypeMismatchException(key, expected) {
    Exception_init('Element ' + key + ' is not a ' + expected, this);
    this.name = 'JsonElementTypeMismatchException';
  }
  JsonElementTypeMismatchException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonElementTypeMismatchException',
    interfaces: [Exception]
  };
  var NULL;
  var COMMA;
  var COLON;
  var BEGIN_OBJ;
  var END_OBJ;
  var BEGIN_LIST;
  var END_LIST;
  var STRING;
  var STRING_ESC;
  var INVALID;
  var UNICODE_ESC;
  var TC_OTHER;
  var TC_STRING;
  var TC_STRING_ESC;
  var TC_WS;
  var TC_COMMA;
  var TC_COLON;
  var TC_BEGIN_OBJ;
  var TC_END_OBJ;
  var TC_BEGIN_LIST;
  var TC_END_LIST;
  var TC_NULL;
  var TC_INVALID;
  var TC_EOF;
  var CTC_MAX;
  var C2ESC_MAX;
  var ESC2C_MAX;
  var C2TC;
  function EscapeCharMappings() {
    EscapeCharMappings_instance = this;
    this.ESC2C_8be2vx$ = Kotlin.charArray(117);
    var $receiver = Kotlin.charArray(93);
    for (var i = 0; i <= 31; i++)
      this.initC2ESC_0($receiver, i, UNICODE_ESC);
    this.initC2ESC_0($receiver, 8, 98);
    this.initC2ESC_0($receiver, 9, 116);
    this.initC2ESC_0($receiver, 10, 110);
    this.initC2ESC_0($receiver, 12, 102);
    this.initC2ESC_0($receiver, 13, 114);
    this.initC2ESC_1($receiver, 47, 47);
    this.initC2ESC_1($receiver, STRING, STRING);
    this.initC2ESC_1($receiver, STRING_ESC, STRING_ESC);
    this.C2ESC_8be2vx$ = $receiver;
  }
  EscapeCharMappings.prototype.initC2ESC_0 = function ($receiver, c, esc) {
    $receiver[c] = esc;
    if (esc !== UNICODE_ESC)
      this.ESC2C_8be2vx$[esc | 0] = toChar(c);
  };
  EscapeCharMappings.prototype.initC2ESC_1 = function ($receiver, c, esc) {
    this.initC2ESC_0($receiver, c | 0, esc);
  };
  EscapeCharMappings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EscapeCharMappings',
    interfaces: []
  };
  var EscapeCharMappings_instance = null;
  function EscapeCharMappings_getInstance() {
    if (EscapeCharMappings_instance === null) {
      new EscapeCharMappings();
    }
    return EscapeCharMappings_instance;
  }
  function initC2TC($receiver, c, cl) {
    $receiver[c] = cl;
  }
  function initC2TC_0($receiver, c, cl) {
    initC2TC($receiver, c | 0, cl);
  }
  function charToTokenClass(c) {
    return (c | 0) < 126 ? C2TC[c | 0] : TC_OTHER;
  }
  function escapeToChar(c) {
    return unboxChar(c < 117 ? EscapeCharMappings_getInstance().ESC2C_8be2vx$[c] : INVALID);
  }
  function Parser(source) {
    this.source = source;
    this.curPos_q6za2t$_0 = 0;
    this.tokenPos_ysj39a$_0 = 0;
    this.tc_rf9xau$_0 = TC_EOF;
    this.offset_0 = -1;
    this.length_0 = 0;
    this.buf_0 = Kotlin.charArray(16);
    this.nextToken();
  }
  Object.defineProperty(Parser.prototype, 'curPos', {
    get: function () {
      return this.curPos_q6za2t$_0;
    },
    set: function (curPos) {
      this.curPos_q6za2t$_0 = curPos;
    }
  });
  Object.defineProperty(Parser.prototype, 'tokenPos', {
    get: function () {
      return this.tokenPos_ysj39a$_0;
    },
    set: function (tokenPos) {
      this.tokenPos_ysj39a$_0 = tokenPos;
    }
  });
  Object.defineProperty(Parser.prototype, 'tc', {
    get: function () {
      return this.tc_rf9xau$_0;
    },
    set: function (tc) {
      this.tc_rf9xau$_0 = tc;
    }
  });
  Parser.prototype.requireTc_hrh3e6$ = defineInlineFunction('benchmarksAnalyzer.org.jetbrains.report.json.Parser.requireTc_hrh3e6$', wrapFunction(function () {
    var JsonParsingException_init = _.org.jetbrains.report.json.JsonParsingException;
    return function (expected, lazyErrorMsg) {
      if (this.tc !== expected) {
        throw new JsonParsingException_init(this.tokenPos, lazyErrorMsg());
      }
    };
  }));
  Object.defineProperty(Parser.prototype, 'canBeginValue', {
    get: function () {
      switch (this.tc) {
        case 8:
        case 6:
        case 0:
        case 1:
        case 10:
          return true;
        default:return false;
      }
    }
  });
  Parser.prototype.takeStr = function () {
    if (this.tc !== TC_OTHER && this.tc !== TC_STRING) {
      throw new JsonParsingException(this.tokenPos, 'Expected string or non-null literal');
    }
    var tmp$;
    if (this.offset_0 < 0)
      tmp$ = String_0(this.buf_0, 0, this.length_0);
    else {
      var $receiver = this.source;
      var startIndex = this.offset_0;
      var endIndex = this.offset_0 + this.length_0 | 0;
      tmp$ = $receiver.substring(startIndex, endIndex);
    }
    var prevStr = tmp$;
    this.nextToken();
    return prevStr;
  };
  Parser.prototype.append_0 = function (ch) {
    var tmp$;
    if (this.length_0 >= this.buf_0.length)
      this.buf_0 = copyOf(this.buf_0, 2 * this.buf_0.length | 0);
    this.buf_0[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = ch;
  };
  Parser.prototype.appendRange_0 = function (source, fromIndex, toIndex) {
    var addLen = toIndex - fromIndex | 0;
    var oldLen = this.length_0;
    var newLen = oldLen + addLen | 0;
    if (newLen > this.buf_0.length)
      this.buf_0 = copyOf(this.buf_0, coerceAtLeast(newLen, 2 * this.buf_0.length | 0));
    for (var i = 0; i < addLen; i++)
      this.buf_0[oldLen + i | 0] = source.charCodeAt(fromIndex + i | 0);
    this.length_0 = this.length_0 + addLen | 0;
  };
  Parser.prototype.nextToken = function () {
    var source = this.source;
    var curPos = this.curPos;
    var maxLen = source.length;
    while (true) {
      if (curPos >= maxLen) {
        this.tokenPos = curPos;
        this.tc = TC_EOF;
        return;
      }
      var ch = source.charCodeAt(curPos);
      var tc = charToTokenClass(ch);
      switch (tc) {
        case 3:
          curPos = curPos + 1 | 0;
          break;
        case 0:
          this.nextLiteral_0(source, curPos);
          return;
        case 1:
          this.nextString_0(source, curPos);
          return;
        default:this.tokenPos = curPos;
          this.tc = tc;
          this.curPos = curPos + 1 | 0;
          return;
      }
    }
  };
  Parser.prototype.nextLiteral_0 = function (source, startPos) {
    this.tokenPos = startPos;
    this.offset_0 = startPos;
    var curPos = startPos;
    var maxLen = source.length;
    while (true) {
      curPos = curPos + 1 | 0;
      if (curPos >= maxLen || charToTokenClass(source.charCodeAt(curPos)) !== TC_OTHER)
        break;
    }
    this.curPos = curPos;
    this.length_0 = curPos - this.offset_0 | 0;
    this.tc = rangeEquals(source, this.offset_0, this.length_0, NULL) ? TC_NULL : TC_OTHER;
  };
  Parser.prototype.nextString_0 = function (source, startPos) {
    this.tokenPos = startPos;
    this.length_0 = 0;
    var curPos = startPos + 1 | 0;
    var lastPos = curPos;
    var maxLen = source.length;
    parse: while (true) {
      if (curPos >= maxLen) {
        throw new JsonParsingException(curPos, 'Unexpected end in string');
      }
      if (source.charCodeAt(curPos) === STRING) {
        break parse;
      }
       else if (source.charCodeAt(curPos) === STRING_ESC) {
        this.appendRange_0(source, lastPos, curPos);
        var newPos = this.appendEsc_0(source, curPos + 1 | 0);
        curPos = newPos;
        lastPos = newPos;
      }
       else {
        curPos = curPos + 1 | 0;
      }
    }
    if (lastPos === (startPos + 1 | 0)) {
      this.offset_0 = lastPos;
      this.length_0 = curPos - lastPos | 0;
    }
     else {
      this.appendRange_0(source, lastPos, curPos);
      this.offset_0 = -1;
    }
    this.curPos = curPos + 1 | 0;
    this.tc = TC_STRING;
  };
  Parser.prototype.appendEsc_0 = function (source, startPos) {
    var tmp$;
    var curPos = startPos;
    var condition = curPos < source.length;
    var pos = curPos;
    if (!condition) {
      throw new JsonParsingException(pos, 'Unexpected end after escape char');
    }
    var curChar = source.charCodeAt((tmp$ = curPos, curPos = tmp$ + 1 | 0, tmp$));
    if (curChar === UNICODE_ESC) {
      curPos = this.appendHex_0(source, curPos);
    }
     else {
      var c = escapeToChar(curChar | 0);
      var condition_0 = c !== INVALID;
      var pos_0 = curPos;
      if (!condition_0) {
        throw new JsonParsingException(pos_0, "Invalid escaped char '" + String.fromCharCode(curChar) + "'");
      }
      this.append_0(c);
    }
    return curPos;
  };
  Parser.prototype.appendHex_0 = function (source, startPos) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var curPos = startPos;
    this.append_0(toChar((fromHexChar(source, (tmp$ = curPos, curPos = tmp$ + 1 | 0, tmp$)) << 12) + (fromHexChar(source, (tmp$_0 = curPos, curPos = tmp$_0 + 1 | 0, tmp$_0)) << 8) + (fromHexChar(source, (tmp$_1 = curPos, curPos = tmp$_1 + 1 | 0, tmp$_1)) << 4) + fromHexChar(source, (tmp$_2 = curPos, curPos = tmp$_2 + 1 | 0, tmp$_2)) | 0));
    return curPos;
  };
  Parser.prototype.skipElement = function () {
    if (this.tc !== TC_BEGIN_OBJ && this.tc !== TC_BEGIN_LIST) {
      this.nextToken();
      return;
    }
    var tokenStack = ArrayList_init_0();
    do {
      switch (this.tc) {
        case 8:
        case 6:
          tokenStack.add_11rb$(this.tc);
          break;
        case 9:
          if (last(tokenStack) !== TC_BEGIN_LIST)
            throw new JsonParsingException(this.curPos, 'found ] instead of }');
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
        case 7:
          if (last(tokenStack) !== TC_BEGIN_OBJ)
            throw new JsonParsingException(this.curPos, 'found } instead of ]');
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
      }
      this.nextToken();
      var isNotEmpty$result;
      isNotEmpty$result = !tokenStack.isEmpty();
    }
     while (isNotEmpty$result);
  };
  Parser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parser',
    interfaces: []
  };
  function fromHexChar(source, curPos) {
    var tmp$;
    if (!(curPos < source.length)) {
      throw new JsonParsingException(curPos, 'Unexpected end in unicode escape');
    }
    var curChar = source.charCodeAt(curPos);
    if ((new CharRange(48, 57)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 48 | 0;
    else if ((new CharRange(97, 102)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 97 + 10 | 0;
    else if ((new CharRange(65, 70)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 65 + 10 | 0;
    else {
      throw new JsonParsingException(curPos, "Invalid toHexChar char '" + String.fromCharCode(curChar) + "' in unicode escape");
    }
    return tmp$;
  }
  function rangeEquals(source, start, length, str) {
    var n = str.length;
    if (length !== n)
      return false;
    for (var i = 0; i < n; i++)
      if (source.charCodeAt(start + i | 0) !== str.charCodeAt(i))
        return false;
    return true;
  }
  var require_0 = defineInlineFunction('benchmarksAnalyzer.org.jetbrains.report.json.require_wqn2ds$', wrapFunction(function () {
    var JsonParsingException_init = _.org.jetbrains.report.json.JsonParsingException;
    return function (condition, pos, msg) {
      if (!condition) {
        throw new JsonParsingException_init(pos, msg());
      }
    };
  }));
  var fail = defineInlineFunction('benchmarksAnalyzer.org.jetbrains.report.json.fail_f0n09d$', wrapFunction(function () {
    var JsonParsingException_init = _.org.jetbrains.report.json.JsonParsingException;
    return function (pos, msg) {
      throw new JsonParsingException_init(pos, msg);
    };
  }));
  function JsonTreeParser(p) {
    JsonTreeParser$Companion_getInstance();
    this.p_0 = p;
  }
  function JsonTreeParser$Companion() {
    JsonTreeParser$Companion_instance = this;
  }
  JsonTreeParser$Companion.prototype.parse_61zpoe$ = function (input) {
    return JsonTreeParser_init(input).readFully();
  };
  JsonTreeParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonTreeParser$Companion_instance = null;
  function JsonTreeParser$Companion_getInstance() {
    if (JsonTreeParser$Companion_instance === null) {
      new JsonTreeParser$Companion();
    }
    return JsonTreeParser$Companion_instance;
  }
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  JsonTreeParser.prototype.readObject_0 = function () {
    var $this = this.p_0;
    if ($this.tc !== TC_BEGIN_OBJ) {
      throw new JsonParsingException($this.tokenPos, 'Expected start of object');
    }
    this.p_0.nextToken();
    var result = HashMap_init();
    while (true) {
      if (this.p_0.tc === TC_COMMA)
        this.p_0.nextToken();
      if (!this.p_0.canBeginValue)
        break;
      var key = this.p_0.takeStr();
      var $this_0 = this.p_0;
      if ($this_0.tc !== TC_COLON) {
        throw new JsonParsingException($this_0.tokenPos, "Expected ':'");
      }
      this.p_0.nextToken();
      var elem = this.read();
      result.put_xwzc9p$(key, elem);
    }
    var $this_1 = this.p_0;
    if ($this_1.tc !== TC_END_OBJ) {
      throw new JsonParsingException($this_1.tokenPos, 'Expected end of object');
    }
    this.p_0.nextToken();
    return new JsonObject(result);
  };
  JsonTreeParser.prototype.readValue_0 = function (isString) {
    var str = this.p_0.takeStr();
    return new JsonLiteral(str, isString);
  };
  JsonTreeParser.prototype.readArray_0 = function () {
    var $this = this.p_0;
    if ($this.tc !== TC_BEGIN_LIST) {
      throw new JsonParsingException($this.tokenPos, 'Expected start of array');
    }
    this.p_0.nextToken();
    var result = ArrayList_init_0();
    while (true) {
      if (this.p_0.tc === TC_COMMA)
        this.p_0.nextToken();
      if (!this.p_0.canBeginValue)
        break;
      var elem = this.read();
      result.add_11rb$(elem);
    }
    var $this_0 = this.p_0;
    if ($this_0.tc !== TC_END_LIST) {
      throw new JsonParsingException($this_0.tokenPos, 'Expected end of array');
    }
    this.p_0.nextToken();
    return new JsonArray(result);
  };
  JsonTreeParser.prototype.read = function () {
    var tmp$;
    if (!this.p_0.canBeginValue) {
      throw new JsonParsingException(this.p_0.curPos, "Can't begin reading value from here");
    }
    var tc = this.p_0.tc;
    switch (tc) {
      case 10:
        var $receiver = JsonNull_getInstance();
        this.p_0.nextToken();
        tmp$ = $receiver;
        break;
      case 1:
        tmp$ = this.readValue_0(true);
        break;
      case 0:
        tmp$ = this.readValue_0(false);
        break;
      case 6:
        tmp$ = this.readObject_0();
        break;
      case 8:
        tmp$ = this.readArray_0();
        break;
      default:throw new JsonParsingException(this.p_0.curPos, "Can't begin reading element");
    }
    return tmp$;
  };
  JsonTreeParser.prototype.readFully = function () {
    var r = this.read();
    var $this = this.p_0;
    if ($this.tc !== TC_EOF) {
      throw new JsonParsingException($this.tokenPos, "Input wasn't consumed fully");
    }
    return r;
  };
  JsonTreeParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeParser',
    interfaces: []
  };
  function JsonTreeParser_init(input, $this) {
    $this = $this || Object.create(JsonTreeParser.prototype);
    JsonTreeParser.call($this, new Parser(input));
    return $this;
  }
  function toHexChar(i) {
    var d = i & 15;
    return d < 10 ? toChar(d + 48 | 0) : toChar(d - 10 + 97 | 0);
  }
  var ESCAPE_CHARS;
  function printQuoted($receiver, value) {
    var tmp$;
    $receiver.append_s8itvh$(STRING);
    var lastPos = 0;
    var length = value.length;
    for (var i = 0; i < length; i++) {
      var c = value.charCodeAt(i) | 0;
      if (c >= ESCAPE_CHARS.length)
        continue;
      tmp$ = ESCAPE_CHARS[c];
      if (tmp$ == null) {
        continue;
      }
      var esc = tmp$;
      $receiver.append_ezbsdh$(value, lastPos, i);
      $receiver.append_gw00v9$(esc);
      lastPos = i + 1 | 0;
    }
    $receiver.append_ezbsdh$(value, lastPos, length);
    $receiver.append_s8itvh$(STRING);
  }
  function toBooleanStrict($receiver) {
    var tmp$;
    tmp$ = toBooleanStrictOrNull($receiver);
    if (tmp$ == null) {
      throw IllegalStateException_init($receiver + ' does not represent a Boolean');
    }
    return tmp$;
  }
  function toBooleanStrictOrNull($receiver) {
    if (equals_0($receiver, 'true', true))
      return true;
    else if (equals_0($receiver, 'false', true))
      return false;
    else
      return null;
  }
  function readFile(fileName) {
    throw IllegalStateException_init("Reading from local file for JS isn't supported".toString());
  }
  function format($receiver, decimalNumber) {
    if (decimalNumber === void 0)
      decimalNumber = 4;
    return $receiver.toFixed(decimalNumber);
  }
  function writeToFile(fileName, text) {
    var tmp$;
    if (!equals(fileName, 'html')) {
      throw IllegalStateException_init("Writing to local file for JS isn't supported".toString());
    }
    var bodyPart = substringBefore(substringAfter(text, '<body>'), '<\/body>');
    (tmp$ = document.body) != null ? (tmp$.innerHTML = bodyPart) : null;
  }
  function assert(value, lazyMessage) {
    if (!value) {
      throw IllegalStateException_init(lazyMessage.toString());
    }
  }
  function sendGetRequest(url, user, password, followLocation) {
    if (user === void 0)
      user = null;
    if (password === void 0)
      password = null;
    if (followLocation === void 0)
      followLocation = false;
    var proxyServerAddress = 'https://perf-proxy.labs.jb.gg/';
    var newUrl = proxyServerAddress + url;
    var request = new XMLHttpRequest();
    request.open('GET', newUrl, false, user, password);
    request.send();
    if (request.status === toShort(200)) {
      return request.responseText;
    }
    throw IllegalStateException_init(('Request to ' + url + ' has status ' + request.status).toString());
  }
  function Connector() {
  }
  Connector.prototype.isCompatible_61zpoe$ = function (fileName) {
    return startsWith(fileName, this.connectorPrefix);
  };
  Connector.prototype.getFileContent_jyasbz$ = function (fileLocation, user, callback$default) {
    if (user === void 0)
      user = null;
    return callback$default ? callback$default(fileLocation, user) : this.getFileContent_jyasbz$$default(fileLocation, user);
  };
  Connector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Connector',
    interfaces: []
  };
  function BintrayConnector() {
    BintrayConnector_instance = this;
    Connector.call(this);
    this.connectorPrefix_l672zd$_0 = 'bintray:';
    this.bintrayUrl = 'https://dl.bintray.com/content/lepilkinaelena/KotlinNativePerformance';
  }
  Object.defineProperty(BintrayConnector.prototype, 'connectorPrefix', {
    get: function () {
      return this.connectorPrefix_l672zd$_0;
    }
  });
  BintrayConnector.prototype.getFileContent_jyasbz$$default = function (fileLocation, user) {
    var fileParametersSize = 3;
    var fileDescription = substringAfter(fileLocation, this.connectorPrefix);
    var fileParameters = split(fileDescription, Kotlin.charArrayOf(58), void 0, fileParametersSize);
    if (fileParameters.size !== fileParametersSize) {
      throw IllegalStateException_init(('To get file from bintray, please, specify, build number from TeamCity and target' + ' in format bintray:build_number:target:filename').toString());
    }
    var buildNumber = fileParameters.get_za3lpa$(0);
    var target = fileParameters.get_za3lpa$(1);
    var fileName = fileParameters.get_za3lpa$(2);
    var accessFileUrl = this.bintrayUrl + '/' + target + '/' + buildNumber + '/' + fileName;
    return sendGetRequest(accessFileUrl, void 0, void 0, true);
  };
  BintrayConnector.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BintrayConnector',
    interfaces: [Connector]
  };
  var BintrayConnector_instance = null;
  function BintrayConnector_getInstance() {
    if (BintrayConnector_instance === null) {
      new BintrayConnector();
    }
    return BintrayConnector_instance;
  }
  function TeamCityConnector() {
    TeamCityConnector_instance = this;
    Connector.call(this);
    this.connectorPrefix_yjz75o$_0 = 'teamcity:';
    this.teamCityUrl = 'http://buildserver.labs.intellij.net';
  }
  Object.defineProperty(TeamCityConnector.prototype, 'connectorPrefix', {
    get: function () {
      return this.connectorPrefix_yjz75o$_0;
    }
  });
  TeamCityConnector.prototype.getFileContent_jyasbz$$default = function (fileLocation, user) {
    var fileDescription = substringAfter(fileLocation, this.connectorPrefix);
    var buildLocator = substringBeforeLast(fileDescription, 58);
    var fileName = substringAfterLast(fileDescription, 58);
    if (equals(fileDescription, fileLocation) || equals(fileDescription, buildLocator) || equals(fileName, fileDescription)) {
      throw IllegalStateException_init(('To get file from bintray, please, specify, build number from TeamCity and target' + ' in format teamcity:build_locator:filename').toString());
    }
    var accessFileUrl = this.teamCityUrl + '/app/rest/builds/' + buildLocator + '/artifacts/content/' + fileName;
    var userName = user != null ? substringBefore_0(user, 58) : null;
    var password = user != null ? substringAfter_0(user, 58) : null;
    return sendGetRequest(accessFileUrl, userName, password);
  };
  TeamCityConnector.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TeamCityConnector',
    interfaces: [Connector]
  };
  var TeamCityConnector_instance = null;
  function TeamCityConnector_getInstance() {
    if (TeamCityConnector_instance === null) {
      new TeamCityConnector();
    }
    return TeamCityConnector_instance;
  }
  function getFileContent(fileName, user) {
    if (user === void 0)
      user = null;
    var tmp$;
    if (BintrayConnector_getInstance().isCompatible_61zpoe$(fileName))
      tmp$ = BintrayConnector_getInstance().getFileContent_jyasbz$(fileName, user);
    else if (TeamCityConnector_getInstance().isCompatible_61zpoe$(fileName))
      tmp$ = TeamCityConnector_getInstance().getFileContent_jyasbz$(fileName, user);
    else
      tmp$ = readFile(fileName);
    return tmp$;
  }
  function main(args) {
    var tmp$;
    var options = listOf([new OptionDescriptor(new ArgType$String(), 'output', 'o', 'Output file'), new OptionDescriptor(new ArgType$Double(), 'eps', 'e', 'Meaningful performance changes', '0.5'), new OptionDescriptor(new ArgType$Boolean(), 'short', 's', 'Show short version of report', 'false'), new OptionDescriptor(new ArgType$Choice(listOf(['text', 'html', 'teamcity'])), 'renders', 'r', 'Renders for showing information', 'text', void 0, true), new OptionDescriptor(new ArgType$String(), 'user', 'u', 'User access information for authorization')]);
    var arguments_0 = listOf([new ArgDescriptor(new ArgType$String(), 'mainReport', 'Main report for analysis'), new ArgDescriptor(new ArgType$String(), 'compareToReport', 'Report to compare to', void 0, false)]);
    var argParser = new ArgParser(options, arguments_0);
    if (argParser.parse_kand9s$(args)) {
      var mainBenchsResults = getFileContent(ensureNotNull(argParser.get_3zqiyt$('mainReport')), argParser.get_3zqiyt$('user'));
      var mainReportElement = JsonTreeParser$Companion_getInstance().parse_61zpoe$(mainBenchsResults);
      var mainBenchsReport = BenchmarksReport$Companion_getInstance().create_m30icm$(mainReportElement);
      var tmp$_0;
      if ((tmp$ = argParser.get_3zqiyt$('compareToReport')) != null) {
        var compareToResults = getFileContent(tmp$, argParser.get_3zqiyt$('user'));
        var compareToReportElement = JsonTreeParser$Companion_getInstance().parse_61zpoe$(compareToResults);
        tmp$_0 = BenchmarksReport$Companion_getInstance().create_m30icm$(compareToReportElement);
      }
       else
        tmp$_0 = null;
      var compareToBenchsReport = tmp$_0;
      var renders = argParser.getAll_3zqiyt$('renders');
      var summaryReport = new SummaryBenchmarksReport(mainBenchsReport, compareToBenchsReport, ensureNotNull(argParser.get_3zqiyt$('eps')));
      var output = {v: argParser.get_3zqiyt$('output')};
      if (renders != null) {
        var tmp$_1;
        tmp$_1 = renders.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          Render$Companion_getInstance().getRenderByName_61zpoe$(element).print_oi5d5c$(summaryReport, ensureNotNull(argParser.get_3zqiyt$('short')), output.v);
          output.v = null;
        }
      }
    }
  }
  function ChangeReport(entityName, changes) {
    this.entityName = entityName;
    this.changes = changes;
  }
  ChangeReport.prototype.renderAsTextReport = function () {
    var content = {v: ''};
    if (!this.changes.isEmpty()) {
      content.v = content.v + this.entityName + ' changes' + '\n';
      content.v = content.v + '====================' + '\n';
      var tmp$;
      tmp$ = this.changes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        content.v = content.v + element.renderAsText();
      }
    }
    return content.v;
  };
  ChangeReport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeReport',
    interfaces: []
  };
  function FieldChange(field, previous, current) {
    FieldChange$Companion_getInstance();
    this.field = field;
    this.previous = previous;
    this.current = current;
  }
  function FieldChange$Companion() {
    FieldChange$Companion_instance = this;
  }
  FieldChange$Companion.prototype.getFieldChangeOrNull_l8dco4$ = function (field, previous, current) {
    if (!equals(previous, current)) {
      return new FieldChange(field, previous, current);
    }
    return null;
  };
  FieldChange$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FieldChange$Companion_instance = null;
  function FieldChange$Companion_getInstance() {
    if (FieldChange$Companion_instance === null) {
      new FieldChange$Companion();
    }
    return FieldChange$Companion_instance;
  }
  FieldChange.prototype.renderAsText = function () {
    return this.field + ': ' + this.previous + ' -> ' + this.current + '\n';
  };
  FieldChange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldChange',
    interfaces: []
  };
  function MeanVariance(mean, variance) {
    this.mean = mean;
    this.variance = variance;
  }
  function MeanVariance$toString$lambda(number) {
    return format(number, 2);
  }
  MeanVariance.prototype.toString = function () {
    var format = MeanVariance$toString$lambda;
    return format(this.mean) + ' \xB1 ' + format(this.variance);
  };
  MeanVariance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MeanVariance',
    interfaces: []
  };
  MeanVariance.prototype.component1 = function () {
    return this.mean;
  };
  MeanVariance.prototype.component2 = function () {
    return this.variance;
  };
  MeanVariance.prototype.copy_lu1900$ = function (mean, variance) {
    return new MeanVariance(mean === void 0 ? this.mean : mean, variance === void 0 ? this.variance : variance);
  };
  MeanVariance.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mean) | 0;
    result = result * 31 + Kotlin.hashCode(this.variance) | 0;
    return result;
  };
  MeanVariance.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.mean, other.mean) && Kotlin.equals(this.variance, other.variance)))));
  };
  function MeanVarianceBenchmark(meanBenchmark, varianceBenchmark) {
    this.meanBenchmark = meanBenchmark;
    this.varianceBenchmark = varianceBenchmark;
  }
  function MeanVarianceBenchmark$calcPercentageDiff$lambda() {
    return 'Mean and variance should be positive and not equal!';
  }
  var Math_0 = Math;
  MeanVarianceBenchmark.prototype.calcPercentageDiff_ojum4f$ = function (other) {
    var tmp$ = other.meanBenchmark.score >= 0 && other.varianceBenchmark.score >= 0;
    if (tmp$) {
      var x = other.meanBenchmark.score - other.varianceBenchmark.score;
      tmp$ = Math_0.abs(x) !== 0.0;
    }
    assert(tmp$, MeanVarianceBenchmark$calcPercentageDiff$lambda);
    var mean = (this.meanBenchmark.score - other.meanBenchmark.score) / other.meanBenchmark.score;
    var x_0 = this.meanBenchmark.score + this.varianceBenchmark.score - other.meanBenchmark.score + other.varianceBenchmark.score;
    var tmp$_0 = Math_0.abs(x_0);
    var x_1 = other.meanBenchmark.score + other.varianceBenchmark.score;
    var maxValueChange = tmp$_0 / Math_0.abs(x_1);
    var x_2 = this.meanBenchmark.score - this.varianceBenchmark.score - other.meanBenchmark.score - other.varianceBenchmark.score;
    var tmp$_1 = Math_0.abs(x_2);
    var x_3 = other.meanBenchmark.score - other.varianceBenchmark.score;
    var minValueChange = tmp$_1 / Math_0.abs(x_3);
    var x_4 = Math_0.abs(mean) - Math_0.max(minValueChange, maxValueChange);
    var variance = Math_0.abs(x_4);
    return new MeanVariance(mean * 100, variance * 100);
  };
  function MeanVarianceBenchmark$calcRatio$lambda() {
    return 'Mean and variance should be positive and not equal!';
  }
  MeanVarianceBenchmark.prototype.calcRatio_ojum4f$ = function (other) {
    assert(other.meanBenchmark.score >= 0 && other.varianceBenchmark.score >= 0 && other.meanBenchmark.score - other.varianceBenchmark.score !== 0.0, MeanVarianceBenchmark$calcRatio$lambda);
    var mean = this.meanBenchmark.score / other.meanBenchmark.score;
    var minRatio = (this.meanBenchmark.score - this.varianceBenchmark.score) / (other.meanBenchmark.score + other.varianceBenchmark.score);
    var maxRatio = (this.meanBenchmark.score + this.varianceBenchmark.score) / (other.meanBenchmark.score - other.varianceBenchmark.score);
    var x = minRatio - mean;
    var tmp$ = Math_0.abs(x);
    var x_0 = maxRatio - mean;
    var b = Math_0.abs(x_0);
    var ratioConfInt = Math_0.min(tmp$, b);
    return new MeanVariance(mean, ratioConfInt);
  };
  MeanVarianceBenchmark.prototype.toString = function () {
    return format(this.meanBenchmark.score) + ' \xB1 ' + format(this.varianceBenchmark.score);
  };
  MeanVarianceBenchmark.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MeanVarianceBenchmark',
    interfaces: []
  };
  MeanVarianceBenchmark.prototype.component1 = function () {
    return this.meanBenchmark;
  };
  MeanVarianceBenchmark.prototype.component2 = function () {
    return this.varianceBenchmark;
  };
  MeanVarianceBenchmark.prototype.copy_dznlp0$ = function (meanBenchmark, varianceBenchmark) {
    return new MeanVarianceBenchmark(meanBenchmark === void 0 ? this.meanBenchmark : meanBenchmark, varianceBenchmark === void 0 ? this.varianceBenchmark : varianceBenchmark);
  };
  MeanVarianceBenchmark.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.meanBenchmark) | 0;
    result = result * 31 + Kotlin.hashCode(this.varianceBenchmark) | 0;
    return result;
  };
  MeanVarianceBenchmark.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.meanBenchmark, other.meanBenchmark) && Kotlin.equals(this.varianceBenchmark, other.varianceBenchmark)))));
  };
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  function geometricMean(values) {
    var destination = ArrayList_init(collectionSizeOrDefault(values, 10));
    var tmp$;
    tmp$ = values.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var x = 1.0 / values.size;
      tmp$_0.call(destination, Math_0.pow(item, x));
    }
    var iterator = destination.iterator();
    if (!iterator.hasNext())
      throw UnsupportedOperationException_init("Empty collection can't be reduced.");
    var accumulator = iterator.next();
    while (iterator.hasNext()) {
      accumulator = accumulator * iterator.next();
    }
    return accumulator;
  }
  function computeMeanVariance(samples) {
    var zStar = 1.96;
    var mean = sum(samples) / samples.size;
    var tmp$;
    var sum_0 = 0.0;
    tmp$ = get_indices(samples).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum_0 += (samples.get_za3lpa$(element) - mean) * (samples.get_za3lpa$(element) - mean);
    }
    var variance = sum_0 / samples.size;
    var x = variance / samples.size;
    var confidenceInterval = Math_0.sqrt(x) * zStar;
    return new MeanVariance(mean, confidenceInterval);
  }
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  function collectMeanResults(benchmarks) {
    var destination = ArrayList_init(benchmarks.size);
    var tmp$;
    tmp$ = benchmarks.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var name = item.key;
      var resultsSet = item.value;
      var repeatedSequence = new Int32Array(resultsSet.size);
      var currentStatus = {v: BenchmarkResult$Status$PASSED_getInstance()};
      var currentWarmup = {v: -1};
      var tmp$_1, tmp$_0_0;
      var index = 0;
      tmp$_1 = resultsSet.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        if (item_0.status === BenchmarkResult$Status$FAILED_getInstance()) {
          currentStatus.v = item_0.status;
        }
        repeatedSequence[index_0] = item_0.repeat;
        if (currentWarmup.v !== -1)
          if (item_0.warmup !== currentWarmup.v)
            println("Check data consistency. Warmup value for benchmark '" + item_0.name + "' differs.");
        currentWarmup.v = item_0.warmup;
      }
      sort(repeatedSequence);
      var tmp$_2, tmp$_0_1;
      var index_1 = 0;
      for (tmp$_2 = 0; tmp$_2 !== repeatedSequence.length; ++tmp$_2) {
        var item_1 = repeatedSequence[tmp$_2];
        var index_2 = (tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1);
        if (index_2 !== 0)
          if ((item_1 - repeatedSequence[index_2 - 1 | 0] | 0) !== 1)
            println("Check data consistency. For benchmark '" + name + "' there is no run" + (' between ' + repeatedSequence[index_2 - 1 | 0] + ' and ' + item_1 + '.'));
      }
      var destination_0 = ArrayList_init(collectionSizeOrDefault(resultsSet, 10));
      var tmp$_3;
      tmp$_3 = resultsSet.iterator();
      while (tmp$_3.hasNext()) {
        var item_2 = tmp$_3.next();
        destination_0.add_11rb$(item_2.score);
      }
      var scoreMeanVariance = computeMeanVariance(destination_0);
      var destination_1 = ArrayList_init(collectionSizeOrDefault(resultsSet, 10));
      var tmp$_4;
      tmp$_4 = resultsSet.iterator();
      while (tmp$_4.hasNext()) {
        var item_3 = tmp$_4.next();
        destination_1.add_11rb$(item_3.runtimeInUs);
      }
      var runtimeInUsMeanVariance = computeMeanVariance(destination_1);
      var meanBenchmark = new BenchmarkResult(name, currentStatus.v, scoreMeanVariance.mean, runtimeInUsMeanVariance.mean, repeatedSequence[resultsSet.size - 1 | 0], currentWarmup.v);
      var varianceBenchmark = new BenchmarkResult(name, currentStatus.v, scoreMeanVariance.variance, runtimeInUsMeanVariance.variance, repeatedSequence[resultsSet.size - 1 | 0], currentWarmup.v);
      tmp$_0.call(destination, to(name, new MeanVarianceBenchmark(meanBenchmark, varianceBenchmark)));
    }
    return toMap(destination);
  }
  function collectBenchmarksDurations(benchmarks) {
    var destination = ArrayList_init(benchmarks.size);
    var tmp$;
    tmp$ = benchmarks.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var name = item.key;
      var resultsSet = item.value;
      var tmp$_1;
      var sum = 0.0;
      tmp$_1 = resultsSet.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum += element.runtimeInUs;
      }
      tmp$_0.call(destination, to(name, sum));
    }
    return toMap(destination);
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function SummaryBenchmarksReport(currentReport, previousReport, meaningfulChangesValue) {
    if (previousReport === void 0)
      previousReport = null;
    if (meaningfulChangesValue === void 0)
      meaningfulChangesValue = 0.5;
    this.currentReport = currentReport;
    this.previousReport = previousReport;
    this.meaningfulChangesValue = meaningfulChangesValue;
    this.mergedReport = null;
    this.benchmarksDurations = null;
    this.benchmarksWithChangedStatus_0 = ArrayList_init_0();
    this.regressions_dhoyc4$_0 = emptyMap();
    this.improvements_obca2h$_0 = emptyMap();
    this.geoMeanBenchmark = null;
    this.geoMeanScoreChange_o6mdjq$_0 = null;
    this.environments = null;
    this.compilers = null;
    var tmp$, tmp$_0;
    var currentBenchmarksTable = collectMeanResults(this.currentReport.benchmarks);
    var previousBenchmarksTable = this.previousReport != null ? collectMeanResults(this.previousReport.benchmarks) : null;
    this.mergedReport = this.createMergedReport_0(currentBenchmarksTable, previousBenchmarksTable);
    this.benchmarksDurations = this.calculateBenchmarksDuration_0(this.currentReport, this.previousReport);
    this.geoMeanBenchmark = this.calculateGeoMeanBenchmark_0(currentBenchmarksTable, previousBenchmarksTable);
    this.environments = new Pair(this.currentReport.env, (tmp$ = this.previousReport) != null ? tmp$.env : null);
    this.compilers = new Pair(this.currentReport.compiler, (tmp$_0 = this.previousReport) != null ? tmp$_0.compiler : null);
    if (this.previousReport != null) {
      this.analyzePerformanceChanges_0();
    }
  }
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'regressions', {
    get: function () {
      return this.regressions_dhoyc4$_0;
    },
    set: function (regressions) {
      this.regressions_dhoyc4$_0 = regressions;
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'improvements', {
    get: function () {
      return this.improvements_obca2h$_0;
    },
    set: function (improvements) {
      this.improvements_obca2h$_0 = improvements;
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'geoMeanScoreChange', {
    get: function () {
      return this.geoMeanScoreChange_o6mdjq$_0;
    },
    set: function (geoMeanScoreChange) {
      this.geoMeanScoreChange_o6mdjq$_0 = geoMeanScoreChange;
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'failedBenchmarks', {
    get: function () {
      var $receiver = this.mergedReport;
      var destination = LinkedHashMap_init();
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0, tmp$_1;
        if (equals((tmp$_1 = (tmp$_0 = element.value.first) != null ? tmp$_0.meanBenchmark : null) != null ? tmp$_1.status : null, BenchmarkResult$Status$FAILED_getInstance())) {
          destination.put_xwzc9p$(element.key, element.value);
        }
      }
      var destination_0 = ArrayList_init(destination.size);
      var tmp$_2;
      tmp$_2 = destination.entries.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination_0.add_11rb$(item.key);
      }
      return destination_0;
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'addedBenchmarks', {
    get: function () {
      var $receiver = this.mergedReport;
      var destination = LinkedHashMap_init();
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.value.second == null) {
          destination.put_xwzc9p$(element.key, element.value);
        }
      }
      var destination_0 = ArrayList_init(destination.size);
      var tmp$_0;
      tmp$_0 = destination.entries.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(item.key);
      }
      return destination_0;
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'removedBenchmarks', {
    get: function () {
      var $receiver = this.mergedReport;
      var destination = LinkedHashMap_init();
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.value.first == null) {
          destination.put_xwzc9p$(element.key, element.value);
        }
      }
      var destination_0 = ArrayList_init(destination.size);
      var tmp$_0;
      tmp$_0 = destination.entries.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(item.key);
      }
      return destination_0;
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'benchmarksNumber', {
    get: function () {
      return this.mergedReport.keys.size;
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'currentMeanVarianceBenchmarks', {
    get: function () {
      var $receiver = this.mergedReport;
      var destination = LinkedHashMap_init();
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.value.first != null) {
          destination.put_xwzc9p$(element.key, element.value);
        }
      }
      var destination_0 = ArrayList_init(destination.size);
      var tmp$_0;
      tmp$_0 = destination.entries.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(ensureNotNull(item.value.first));
      }
      return destination_0;
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'currentBenchmarksDuration', {
    get: function () {
      var $receiver = this.benchmarksDurations;
      var destination = LinkedHashMap_init();
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.value.first != null) {
          destination.put_xwzc9p$(element.key, element.value);
        }
      }
      var destination_0 = ArrayList_init(destination.size);
      var tmp$_0;
      tmp$_0 = destination.entries.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(item.key, ensureNotNull(item.value.first)));
      }
      return toMap(destination_0);
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'maximumRegression', {
    get: function () {
      return this.getMaximumChange_0(this.regressions);
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'maximumImprovement', {
    get: function () {
      return this.getMaximumChange_0(this.improvements);
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'regressionsGeometricMean', {
    get: function () {
      return this.getGeometricMeanOfChanges_0(this.regressions);
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'improvementsGeometricMean', {
    get: function () {
      return this.getGeometricMeanOfChanges_0(this.improvements);
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'envChanges', {
    get: function () {
      var tmp$;
      var previousEnvironment = this.environments.second;
      var currentEnvironment = this.environments.first;
      var tmp$_0;
      if (previousEnvironment != null) {
        var $receiver = ArrayList_init_0();
        this.addFieldChange_0($receiver, 'Machine CPU', previousEnvironment.machine.cpu, currentEnvironment.machine.cpu);
        this.addFieldChange_0($receiver, 'Machine OS', previousEnvironment.machine.os, currentEnvironment.machine.os);
        this.addFieldChange_0($receiver, 'JDK version', previousEnvironment.jdk.version, currentEnvironment.jdk.version);
        this.addFieldChange_0($receiver, 'JDK vendor', previousEnvironment.jdk.vendor, currentEnvironment.jdk.vendor);
        tmp$_0 = $receiver;
      }
       else
        tmp$_0 = null;
      return (tmp$ = tmp$_0) != null ? tmp$ : emptyList();
    }
  });
  Object.defineProperty(SummaryBenchmarksReport.prototype, 'kotlinChanges', {
    get: function () {
      var tmp$;
      var previousCompiler = this.compilers.second;
      var currentCompiler = this.compilers.first;
      var tmp$_0;
      if (previousCompiler != null) {
        var $receiver = ArrayList_init_0();
        this.addFieldChange_0($receiver, 'Backend type', previousCompiler.backend.type.type, currentCompiler.backend.type.type);
        this.addFieldChange_0($receiver, 'Backend version', previousCompiler.backend.version, currentCompiler.backend.version);
        this.addFieldChange_0($receiver, 'Backend flags', previousCompiler.backend.flags.toString(), currentCompiler.backend.flags.toString());
        this.addFieldChange_0($receiver, 'Kotlin version', previousCompiler.kotlinVersion, currentCompiler.kotlinVersion);
        tmp$_0 = $receiver;
      }
       else
        tmp$_0 = null;
      return (tmp$ = tmp$_0) != null ? tmp$ : emptyList();
    }
  });
  SummaryBenchmarksReport.prototype.getMaximumChange_0 = function (bucket) {
    var tmp$;
    if (bucket.isEmpty())
      tmp$ = 0.0;
    else {
      var $receiver = bucket.values;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.first.mean);
      }
      tmp$ = first(destination);
    }
    return tmp$;
  };
  SummaryBenchmarksReport.prototype.getGeometricMeanOfChanges_0 = function (bucket) {
    var tmp$;
    if (bucket.isEmpty())
      return 0.0;
    var $receiver = bucket.values;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.first.mean);
    }
    var percentsList = destination;
    if (first(percentsList) > 0.0) {
      tmp$ = geometricMean(percentsList);
    }
     else {
      var x = this.getMaximumChange_0(bucket);
      var precision = Math_0.abs(x) + 1;
      var $receiver_0 = percentsList;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(item_0 + precision);
      }
      percentsList = destination_0;
      tmp$ = geometricMean(percentsList) - precision;
    }
    return tmp$;
  };
  SummaryBenchmarksReport.prototype.getBenchmarksWithChangedStatus = function () {
    return this.benchmarksWithChangedStatus_0;
  };
  SummaryBenchmarksReport.prototype.createGeoMeanBenchmark_0 = function (benchTable) {
    var geoMeanBenchmarkName = 'Geometric mean';
    var $receiver = toList(benchTable);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var value = item.component2();
      tmp$_0.call(destination, value.meanBenchmark.score);
    }
    var geoMean = geometricMean(destination);
    var $receiver_0 = toList(benchTable);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var value_0 = item_0.component2();
      tmp$_2.call(destination_0, value_0.varianceBenchmark.score);
    }
    var varianceGeoMean = geometricMean(destination_0);
    var meanBenchmark = BenchmarkResult_init(geoMeanBenchmarkName, geoMean);
    var varianceBenchmark = BenchmarkResult_init(geoMeanBenchmarkName, varianceGeoMean);
    return new MeanVarianceBenchmark(meanBenchmark, varianceBenchmark);
  };
  SummaryBenchmarksReport.prototype.calculateBenchmarksDuration_0 = function (currentReport, previousReport) {
    var tmp$;
    var currentDurations = collectBenchmarksDurations(currentReport.benchmarks);
    var previousDurations = (tmp$ = previousReport != null ? collectBenchmarksDurations(previousReport.benchmarks) : null) != null ? tmp$ : emptyMap();
    var $receiver = union(currentDurations.keys, previousDurations.keys);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(to(item, new Pair(currentDurations.get_11rb$(item), previousDurations.get_11rb$(item))));
    }
    return toMap(destination);
  };
  SummaryBenchmarksReport.prototype.createMergedReport_0 = function (currentBenchmarks, previousBenchmarks) {
    var mergedTable = LinkedHashMap_init();
    var tmp$;
    tmp$ = currentBenchmarks.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var name = element.key;
      var current = element.value;
      var currentBenchmark = current.meanBenchmark;
      var tmp$_0 = previousBenchmarks == null;
      if (!tmp$_0) {
        var tmp$_1;
        tmp$_0 = !(Kotlin.isType(tmp$_1 = previousBenchmarks, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(name);
      }
      if (tmp$_0) {
        var tmp$_2;
        var value = mergedTable.get_11rb$(name);
        if (value == null) {
          var answer = new Pair(current, null);
          mergedTable.put_xwzc9p$(name, answer);
          tmp$_2 = answer;
        }
         else {
          tmp$_2 = value;
        }
      }
       else {
        var previousBenchmark = getValue(previousBenchmarks, name).meanBenchmark;
        var tmp$_3;
        var value_0 = mergedTable.get_11rb$(name);
        if (value_0 == null) {
          var answer_0 = new Pair(current, previousBenchmarks.get_11rb$(name));
          mergedTable.put_xwzc9p$(name, answer_0);
          tmp$_3 = answer_0;
        }
         else {
          tmp$_3 = value_0;
        }
        if (previousBenchmark.status !== currentBenchmark.status) {
          var statusChange = new FieldChange(name, previousBenchmark.status, currentBenchmark.status);
          this.benchmarksWithChangedStatus_0.add_11rb$(statusChange);
        }
      }
    }
    var tmp$_4;
    var tmp$_5;
    if (previousBenchmarks != null) {
      var destination = LinkedHashMap_init();
      var tmp$_6;
      tmp$_6 = previousBenchmarks.entries.iterator();
      while (tmp$_6.hasNext()) {
        var element_0 = tmp$_6.next();
        var key = element_0.key;
        var tmp$_7;
        if (!(Kotlin.isType(tmp$_7 = currentBenchmarks, Map) ? tmp$_7 : throwCCE()).containsKey_11rb$(key)) {
          destination.put_xwzc9p$(element_0.key, element_0.value);
        }
      }
      tmp$_5 = destination;
    }
     else
      tmp$_5 = null;
    if ((tmp$_4 = tmp$_5) != null) {
      var tmp$_8;
      tmp$_8 = tmp$_4.entries.iterator();
      while (tmp$_8.hasNext()) {
        var element_1 = tmp$_8.next();
        var key_0 = element_1.key;
        var value_1 = element_1.value;
        var tmp$_9;
        var value_2 = mergedTable.get_11rb$(key_0);
        if (value_2 == null) {
          var answer_1 = new Pair(null, value_1);
          mergedTable.put_xwzc9p$(key_0, answer_1);
          tmp$_9 = answer_1;
        }
         else {
          tmp$_9 = value_2;
        }
      }
    }
    return mergedTable;
  };
  SummaryBenchmarksReport.prototype.calculateGeoMeanBenchmark_0 = function (currentBenchmarks, previousBenchmarks) {
    var currentGeoMean = this.createGeoMeanBenchmark_0(currentBenchmarks);
    var previousGeoMean = previousBenchmarks != null ? this.createGeoMeanBenchmark_0(previousBenchmarks) : null;
    return new Pair(currentGeoMean, previousGeoMean);
  };
  SummaryBenchmarksReport.prototype.getBenchmarkPerfomanceChange_0 = function (name, benchmark) {
    var current = benchmark.component1()
    , previous = benchmark.component2();
    if (current != null) {
      if (previous != null) {
        var percent = current.calcPercentageDiff_ojum4f$(previous);
        var ratio = current.calcRatio_ojum4f$(previous);
        var x = percent.mean;
        if (Math_0.abs(x) >= this.meaningfulChangesValue) {
          return new Pair(name, new Pair(percent, ratio));
        }
      }
    }
    return null;
  };
  function SummaryBenchmarksReport$analyzePerformanceChanges$lambda(this$SummaryBenchmarksReport) {
    return function (f) {
      var name = f.key;
      var element = f.value;
      return this$SummaryBenchmarksReport.getBenchmarkPerfomanceChange_0(name, element);
    };
  }
  function SummaryBenchmarksReport$analyzePerformanceChanges$lambda_0(it) {
    return it.second.first.mean;
  }
  function SummaryBenchmarksReport$analyzePerformanceChanges$lambda_1(it) {
    return it.second.first.mean;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  SummaryBenchmarksReport.prototype.analyzePerformanceChanges_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var $receiver = filterNotNull(map(asSequence(this.mergedReport), SummaryBenchmarksReport$analyzePerformanceChanges$lambda(this)));
    var destination = LinkedHashMap_init();
    var tmp$_7;
    tmp$_7 = $receiver.iterator();
    while (tmp$_7.hasNext()) {
      var element = tmp$_7.next();
      var key = element.second.first.mean > 0 ? 'regressions' : 'improvements';
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var performanceChanges = destination;
    var tmp$_8;
    if ((tmp$_0 = (tmp$ = performanceChanges.get_11rb$('regressions')) != null ? sortedWith(tmp$, new Comparator$ObjectLiteral(compareByDescending$lambda(SummaryBenchmarksReport$analyzePerformanceChanges$lambda_0))) : null) != null) {
      var destination_0 = ArrayList_init(collectionSizeOrDefault(tmp$_0, 10));
      var tmp$_9;
      tmp$_9 = tmp$_0.iterator();
      while (tmp$_9.hasNext()) {
        var item = tmp$_9.next();
        destination_0.add_11rb$(to(item.first, item.second));
      }
      tmp$_8 = destination_0;
    }
     else
      tmp$_8 = null;
    this.regressions = (tmp$_2 = (tmp$_1 = tmp$_8) != null ? toMap(tmp$_1) : null) != null ? tmp$_2 : emptyMap();
    var tmp$_10;
    if ((tmp$_4 = (tmp$_3 = performanceChanges.get_11rb$('improvements')) != null ? sortedWith(tmp$_3, new Comparator$ObjectLiteral_0(compareBy$lambda(SummaryBenchmarksReport$analyzePerformanceChanges$lambda_1))) : null) != null) {
      var destination_1 = ArrayList_init(collectionSizeOrDefault(tmp$_4, 10));
      var tmp$_11;
      tmp$_11 = tmp$_4.iterator();
      while (tmp$_11.hasNext()) {
        var item_0 = tmp$_11.next();
        destination_1.add_11rb$(to(item_0.first, item_0.second));
      }
      tmp$_10 = destination_1;
    }
     else
      tmp$_10 = null;
    this.improvements = (tmp$_6 = (tmp$_5 = tmp$_10) != null ? toMap(tmp$_5) : null) != null ? tmp$_6 : emptyMap();
    var tmp$_12 = this.geoMeanBenchmark;
    var current = tmp$_12.component1()
    , previous = tmp$_12.component2();
    this.geoMeanScoreChange = current != null ? previous != null ? new Pair(current.calcPercentageDiff_ojum4f$(previous), current.calcRatio_ojum4f$(previous)) : null : null;
  };
  SummaryBenchmarksReport.prototype.addFieldChange_0 = function ($receiver, field, previous, current) {
    var tmp$;
    if ((tmp$ = FieldChange$Companion_getInstance().getFieldChangeOrNull_l8dco4$(field, previous, current)) != null) {
      $receiver.add_11rb$(tmp$);
    }
  };
  SummaryBenchmarksReport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SummaryBenchmarksReport',
    interfaces: []
  };
  function ArgType(hasParameter) {
    this.hasParameter = hasParameter;
  }
  ArgType.prototype.check_puj7f4$ = function (value, name) {
  };
  function ArgType$Boolean() {
    ArgType.call(this, false);
  }
  Object.defineProperty(ArgType$Boolean.prototype, 'description', {
    get: function () {
      return '';
    }
  });
  ArgType$Boolean.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Boolean',
    interfaces: [ArgType]
  };
  function ArgType$String() {
    ArgType.call(this, true);
  }
  Object.defineProperty(ArgType$String.prototype, 'description', {
    get: function () {
      return '{ String }';
    }
  });
  ArgType$String.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'String',
    interfaces: [ArgType]
  };
  function ArgType$Int() {
    ArgType.call(this, true);
  }
  Object.defineProperty(ArgType$Int.prototype, 'description', {
    get: function () {
      return '{ Int }';
    }
  });
  ArgType$Int.prototype.check_puj7f4$ = function (value, name) {
    if (toIntOrNull(value) == null) {
      throw IllegalStateException_init(('Option ' + name + ' is expected to be integer number. ' + value + ' is provided.').toString());
    }
  };
  ArgType$Int.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Int',
    interfaces: [ArgType]
  };
  function ArgType$Double() {
    ArgType.call(this, true);
  }
  Object.defineProperty(ArgType$Double.prototype, 'description', {
    get: function () {
      return '{ Double }';
    }
  });
  ArgType$Double.prototype.check_puj7f4$ = function (value, name) {
    if (toDoubleOrNull(value) == null) {
      throw IllegalStateException_init(('Option ' + name + ' is expected to be double number. ' + value + ' is provided.').toString());
    }
  };
  ArgType$Double.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Double',
    interfaces: [ArgType]
  };
  function ArgType$Choice(values) {
    ArgType.call(this, true);
    this.values = values;
  }
  Object.defineProperty(ArgType$Choice.prototype, 'description', {
    get: function () {
      return '{ Value should be one of ' + this.values + ' }';
    }
  });
  ArgType$Choice.prototype.check_puj7f4$ = function (value, name) {
    if (!this.values.contains_11rb$(value)) {
      throw IllegalStateException_init(('Option ' + name + ' is expected to be obe of ' + this.values + '. ' + value + ' is provided.').toString());
    }
  };
  ArgType$Choice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Choice',
    interfaces: [ArgType]
  };
  ArgType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArgType',
    interfaces: []
  };
  function Descriptor(type, longName, description, defaultValue, isRequired) {
    if (description === void 0)
      description = null;
    if (defaultValue === void 0)
      defaultValue = null;
    if (isRequired === void 0)
      isRequired = false;
    this.type = type;
    this.longName = longName;
    this.description = description;
    this.defaultValue = defaultValue;
    this.isRequired = isRequired;
  }
  Descriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Descriptor',
    interfaces: []
  };
  function OptionDescriptor(type, longName, shortName, description, defaultValue, isRequired, isMultiple) {
    if (shortName === void 0)
      shortName = null;
    if (description === void 0)
      description = null;
    if (defaultValue === void 0)
      defaultValue = null;
    if (isRequired === void 0)
      isRequired = false;
    if (isMultiple === void 0)
      isMultiple = false;
    Descriptor.call(this, type, longName, description, defaultValue, isRequired);
    this.shortName = shortName;
    this.isMultiple = isMultiple;
  }
  Object.defineProperty(OptionDescriptor.prototype, 'textDescription', {
    get: function () {
      return 'option -' + this.longName;
    }
  });
  Object.defineProperty(OptionDescriptor.prototype, 'helpMessage', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      var result = StringBuilder_init();
      result.append_gw00v9$('    -' + this.longName);
      if ((tmp$ = this.shortName) != null) {
        result.append_gw00v9$(', -' + tmp$);
      }
      if ((tmp$_0 = this.defaultValue) != null) {
        result.append_gw00v9$(' [' + tmp$_0 + ']');
      }
      if ((tmp$_1 = this.description) != null) {
        result.append_gw00v9$(' -> ' + tmp$_1);
      }
      if (!this.isRequired)
        result.append_gw00v9$(' (optional)');
      result.append_gw00v9$(' ' + this.type.description);
      result.append_gw00v9$('\n');
      return result.toString();
    }
  });
  OptionDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptionDescriptor',
    interfaces: [Descriptor]
  };
  function ArgDescriptor(type, longName, description, defaultValue, isRequired) {
    if (description === void 0)
      description = null;
    if (defaultValue === void 0)
      defaultValue = null;
    if (isRequired === void 0)
      isRequired = true;
    Descriptor.call(this, type, longName, description, defaultValue, isRequired);
  }
  Object.defineProperty(ArgDescriptor.prototype, 'textDescription', {
    get: function () {
      return 'argument ' + this.longName;
    }
  });
  Object.defineProperty(ArgDescriptor.prototype, 'helpMessage', {
    get: function () {
      var tmp$, tmp$_0;
      var result = StringBuilder_init();
      result.append_gw00v9$('    ' + this.longName);
      if ((tmp$ = this.defaultValue) != null) {
        result.append_gw00v9$(' [' + tmp$ + ']');
      }
      if ((tmp$_0 = this.description) != null) {
        result.append_gw00v9$(' -> ' + tmp$_0);
      }
      if (!this.isRequired)
        result.append_gw00v9$(' (optional)');
      result.append_gw00v9$(' ' + this.type.description);
      result.append_gw00v9$('\n');
      return result.toString();
    }
  });
  ArgDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArgDescriptor',
    interfaces: [Descriptor]
  };
  function ArgParser(optionsList, argsList) {
    if (argsList === void 0) {
      argsList = emptyList();
    }
    this.options_0 = toList_0(union(optionsList, listOf_0(new OptionDescriptor(new ArgType$Boolean(), 'help', 'h', 'Usage info'))));
    this.arguments_0 = argsList;
    this.parsedValues_laulu5$_0 = this.parsedValues_laulu5$_0;
  }
  Object.defineProperty(ArgParser.prototype, 'parsedValues_0', {
    get: function () {
      if (this.parsedValues_laulu5$_0 == null)
        return throwUPAE('parsedValues');
      return this.parsedValues_laulu5$_0;
    },
    set: function (parsedValues) {
      this.parsedValues_laulu5$_0 = parsedValues;
    }
  });
  function ArgParser$ParsedArg($outer, descriptor, values) {
    this.$outer = $outer;
    this.descriptor = descriptor;
    this.values = values;
    if (this.values.isEmpty()) {
      this.$outer.printError_0('Parsed value should be provided!');
    }
  }
  ArgParser$ParsedArg.prototype.getTyped_0 = function (value) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.descriptor.type;
    if (Kotlin.isType(tmp$, ArgType$Int))
      tmp$_0 = toInt(value);
    else if (Kotlin.isType(tmp$, ArgType$Double))
      tmp$_0 = toDouble(value);
    else if (Kotlin.isType(tmp$, ArgType$Boolean))
      tmp$_0 = equals(value, 'true');
    else
      tmp$_0 = value;
    var typedValue = Kotlin.isType(tmp$_1 = tmp$_0, Any) ? tmp$_1 : null;
    typedValue != null ? typedValue : this.$outer.printError_0('Argument ' + this.descriptor.longName + ' has type ' + this.descriptor.type + ' which differs from expected!');
    return typedValue;
  };
  ArgParser$ParsedArg.prototype.get_30y1fr$ = function () {
    return this.getTyped_0(this.values.get_za3lpa$(0));
  };
  ArgParser$ParsedArg.prototype.getAll_30y1fr$ = function () {
    var $receiver = this.values;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.getTyped_0(item));
    }
    return destination;
  };
  ArgParser$ParsedArg.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParsedArg',
    interfaces: []
  };
  ArgParser.prototype.printError_0 = function (message) {
    throw IllegalStateException_init((message + '\n' + this.makeUsage_0()).toString());
  };
  ArgParser.prototype.saveAsArg_0 = function (argDescriptors, arg, processedValues) {
    var $receiver = argDescriptors.keys;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (getValue(processedValues, element).isEmpty())
        destination.add_11rb$(element);
    }
    var nullArgs = destination;
    var name = firstOrNull(nullArgs);
    if (name != null) {
      getValue(argDescriptors, name).type.check_puj7f4$(arg, name);
      getValue(processedValues, name).add_11rb$(arg);
      return true;
    }
    return false;
  };
  ArgParser.prototype.saveAsOption_0 = function (descriptor, value, processedValues) {
    if (!descriptor.isMultiple && !getValue(processedValues, descriptor.longName).isEmpty()) {
      this.printError_0('Option ' + descriptor.longName + ' is used more than one time!');
    }
    descriptor.type.check_puj7f4$(value, descriptor.longName);
    getValue(processedValues, descriptor.longName).add_11rb$(value);
  };
  ArgParser.prototype.parse_kand9s$ = function (args) {
    var tmp$;
    var index = {v: 0};
    var $receiver = this.options_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(to(item.longName, item));
    }
    var optDescriptors = toMap(destination);
    var $receiver_0 = this.options_0;
    var destination_0 = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (element.shortName != null)
        destination_0.add_11rb$(element);
    }
    var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_1.add_11rb$(to(ensureNotNull(item_0.shortName), item_0.longName));
    }
    var shortNames = toMap(destination_1);
    var $receiver_1 = this.arguments_0;
    var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_3;
    tmp$_3 = $receiver_1.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      destination_2.add_11rb$(to(item_1.longName, item_1));
    }
    var argDescriptors = toMap(destination_2);
    var descriptorsKeys = toList_0(union(optDescriptors.keys, argDescriptors.keys));
    var destination_3 = ArrayList_init(collectionSizeOrDefault(descriptorsKeys, 10));
    var tmp$_4;
    tmp$_4 = descriptorsKeys.iterator();
    while (tmp$_4.hasNext()) {
      var item_2 = tmp$_4.next();
      destination_3.add_11rb$(to(item_2, ArrayList_init_0()));
    }
    var processedValues = toMutableMap(toMap(destination_3));
    var destination_4 = ArrayList_init(collectionSizeOrDefault(descriptorsKeys, 10));
    var tmp$_5;
    tmp$_5 = descriptorsKeys.iterator();
    while (tmp$_5.hasNext()) {
      var item_3 = tmp$_5.next();
      destination_4.add_11rb$(to(item_3, null));
    }
    this.parsedValues_0 = toMutableMap(toMap(destination_4));
    while (index.v < args.length) {
      var arg = args[index.v];
      if (startsWith_0(arg, 45)) {
        var name = (tmp$ = shortNames.get_11rb$(arg.substring(1))) != null ? tmp$ : arg.substring(1);
        var descriptor = optDescriptors.get_11rb$(name);
        var tmp$_6;
        if (descriptor != null) {
          var block$result;
          var tmp$_7;
          if (descriptor.type.hasParameter) {
            if (index.v < (args.length - 1 | 0)) {
              this.saveAsOption_0(descriptor, args[index.v + 1 | 0], processedValues);
              block$result = (tmp$_7 = index.v, index.v = tmp$_7 + 1 | 0, tmp$_7);
            }
             else {
              block$result = this.printError_0('No value for ' + descriptor.textDescription);
            }
          }
           else {
            if (equals(name, 'help')) {
              println(this.makeUsage_0());
              return false;
            }
            block$result = (this.saveAsOption_0(descriptor, 'true', processedValues), Unit);
          }
          tmp$_6 = block$result;
        }
         else
          tmp$_6 = null;
        if (tmp$_6 == null) {
          if (!this.saveAsArg_0(argDescriptors, arg, processedValues)) {
            this.printError_0('Unknown option ' + arg);
          }
        }
      }
       else {
        if (!this.saveAsArg_0(argDescriptors, arg, processedValues)) {
          this.printError_0('Too many arguments!');
        }
      }
      index.v = index.v + 1 | 0;
    }
    var tmp$_8;
    tmp$_8 = processedValues.entries.iterator();
    while (tmp$_8.hasNext()) {
      var element_0 = tmp$_8.next();
      var key = element_0.key;
      var value = element_0.value;
      var tmp$_9;
      var descriptor_0 = (tmp$_9 = optDescriptors.get_11rb$(key)) != null ? tmp$_9 : getValue(argDescriptors, key);
      if (value.isEmpty()) {
        var tmp$_10;
        if (descriptor_0.defaultValue != null) {
          var $receiver_2 = this.parsedValues_0;
          var value_0 = new ArgParser$ParsedArg(this, descriptor_0, listOf_0(descriptor_0.defaultValue));
          $receiver_2.put_xwzc9p$(key, value_0);
          tmp$_10 = Unit;
        }
         else
          tmp$_10 = null;
        if (tmp$_10 == null) {
          if (descriptor_0.isRequired) {
            this.printError_0('Please, provide value for ' + descriptor_0.textDescription + '. It should be always set');
          }
           else {
            this.parsedValues_0.put_xwzc9p$(key, null);
          }
        }
      }
       else {
        var $receiver_3 = this.parsedValues_0;
        var value_1 = new ArgParser$ParsedArg(this, descriptor_0, value);
        $receiver_3.put_xwzc9p$(key, value_1);
      }
    }
    return true;
  };
  ArgParser.prototype.get_3zqiyt$ = function (name) {
    if (this.parsedValues_laulu5$_0 != null) {
      var arg = this.parsedValues_0.get_11rb$(name);
      return arg != null ? arg.get_30y1fr$() : null;
    }
     else {
      this.printError_0('Method parse() of ArgParser class should be called before getting arguments and options.');
    }
  };
  ArgParser.prototype.getAll_3zqiyt$ = function (name) {
    if (this.parsedValues_laulu5$_0 != null) {
      var arg = this.parsedValues_0.get_11rb$(name);
      return arg != null ? arg.getAll_30y1fr$() : null;
    }
     else {
      this.printError_0('Method parse() of ArgParser class should be called before getting arguments and options.');
    }
  };
  ArgParser.prototype.makeUsage_0 = function () {
    var result = StringBuilder_init();
    result.append_gw00v9$('Usage: \n');
    if (!this.arguments_0.isEmpty()) {
      result.append_gw00v9$('Arguments: \n');
      var tmp$;
      tmp$ = this.arguments_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        result.append_gw00v9$(element.helpMessage);
      }
    }
    result.append_gw00v9$('Options: \n');
    var tmp$_0;
    tmp$_0 = this.options_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      result.append_gw00v9$(element_0.helpMessage);
    }
    return result.toString();
  };
  ArgParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArgParser',
    interfaces: []
  };
  function clamp(value, minValue, maxValue) {
    return minOf(maxOf(value, minValue), maxValue);
  }
  function Natural(initValue) {
    var tmp$;
    if (initValue > 0)
      tmp$ = initValue;
    else {
      throw IllegalStateException_init(('Provided value ' + initValue + " isn't natural").toString());
    }
    this.value = tmp$;
  }
  Natural.prototype.toString = function () {
    return this.value.toString();
  };
  Natural.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Natural',
    interfaces: []
  };
  function Element() {
  }
  Element.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Element',
    interfaces: []
  };
  function TextElement(text) {
    this.text = text;
  }
  TextElement.prototype.render_3185rs$ = function (builder, indent) {
    builder.append_gw00v9$(indent + this.text + '\n');
  };
  TextElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextElement',
    interfaces: [Element]
  };
  function HtmlTagMarker() {
  }
  HtmlTagMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlTagMarker',
    interfaces: [Annotation]
  };
  function Tag(name) {
    this.name = name;
    this.children = ArrayList_init_0();
    this.attributes = HashMap_init();
  }
  Tag.prototype.initTag_11d4c2$ = function (tag, init) {
    init(tag);
    this.children.add_11rb$(tag);
    return tag;
  };
  Tag.prototype.render_3185rs$ = function (builder, indent) {
    var tmp$;
    builder.append_gw00v9$(indent + '<' + this.name + this.renderAttributes_gezonu$_0() + '>' + '\n');
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      c.render_3185rs$(builder, indent + '  ');
    }
    builder.append_gw00v9$(indent + '<\/' + this.name + '>' + '\n');
  };
  Tag.prototype.renderAttributes_gezonu$_0 = function () {
    var $receiver = this.attributes;
    var destination = ArrayList_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var attr = item.key;
      var value = item.value;
      tmp$_0.call(destination, attr + '=' + '"' + value + '"');
    }
    return joinToString(destination, ' ', ' ');
  };
  Tag.prototype.toString = function () {
    var builder = StringBuilder_init();
    this.render_3185rs$(builder, '');
    return builder.toString();
  };
  Tag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tag',
    interfaces: [Element]
  };
  function TagWithText(name) {
    Tag.call(this, name);
  }
  TagWithText.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.children.add_11rb$(new TextElement($receiver));
  };
  TagWithText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagWithText',
    interfaces: [Tag]
  };
  function HTML() {
    TagWithText.call(this, 'html');
  }
  HTML.prototype.head_8o7jwc$ = function (init) {
    return this.initTag_11d4c2$(new Head(), init);
  };
  HTML.prototype.body_mp9ow2$ = function (init) {
    return this.initTag_11d4c2$(new Body(), init);
  };
  HTML.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HTML',
    interfaces: [TagWithText]
  };
  function Head() {
    TagWithText.call(this, 'head');
  }
  Head.prototype.title_4u5i8k$ = function (init) {
    return this.initTag_11d4c2$(new Title(), init);
  };
  Head.prototype.link_pywtue$ = function (init) {
    return this.initTag_11d4c2$(new Link(), init);
  };
  Head.prototype.script_s9yxpj$ = function (init) {
    return this.initTag_11d4c2$(new Script(), init);
  };
  Head.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Head',
    interfaces: [TagWithText]
  };
  function Title() {
    TagWithText.call(this, 'title');
  }
  Title.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Title',
    interfaces: [TagWithText]
  };
  function Link() {
    TagWithText.call(this, 'link');
  }
  Link.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Link',
    interfaces: [TagWithText]
  };
  function Script() {
    TagWithText.call(this, 'script');
  }
  Script.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Script',
    interfaces: [TagWithText]
  };
  function BodyTag(name) {
    TagWithText.call(this, name);
  }
  BodyTag.prototype.b_iygb32$ = function (init) {
    return this.initTag_11d4c2$(new B(), init);
  };
  BodyTag.prototype.p_cuoz3g$ = function (init) {
    return this.initTag_11d4c2$(new P(), init);
  };
  BodyTag.prototype.h1_b4ikij$ = function (init) {
    return this.initTag_11d4c2$(new H1(), init);
  };
  BodyTag.prototype.h2_dt1hwm$ = function (init) {
    return this.initTag_11d4c2$(new H2(), init);
  };
  BodyTag.prototype.h4_7cyf88$ = function (init) {
    return this.initTag_11d4c2$(new H4(), init);
  };
  BodyTag.prototype.hr_uan1mu$ = function (init) {
    return this.initTag_11d4c2$(new HR(), init);
  };
  BodyTag.prototype.a_6s9amp$ = function (href, init) {
    var a = this.initTag_11d4c2$(new A(), init);
    a.href = href;
  };
  BodyTag.prototype.img_ecjuzb$ = function (src, init) {
    var element = this.initTag_11d4c2$(new Image(), init);
    element.src = src;
  };
  BodyTag.prototype.table_i0l9qi$ = function (init) {
    return this.initTag_11d4c2$(new Table(), init);
  };
  BodyTag.prototype.div_g2x9wh$ = function (classAttr, init) {
    return this.initTag_11d4c2$(new Div(classAttr), init);
  };
  BodyTag.prototype.button_1kztdo$ = function (classAttr, init) {
    return this.initTag_11d4c2$(new Button(classAttr), init);
  };
  BodyTag.prototype.header_vbd015$ = function (classAttr, init) {
    return this.initTag_11d4c2$(new Header(classAttr), init);
  };
  BodyTag.prototype.span_7elwq4$ = function (classAttr, init) {
    return this.initTag_11d4c2$(new Span(classAttr), init);
  };
  BodyTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BodyTag',
    interfaces: [TagWithText]
  };
  function BodyTagWithClass(name, classAttr) {
    BodyTag.call(this, name);
    this.classAttr = classAttr;
    var $receiver = this.attributes;
    var value = this.classAttr;
    $receiver.put_xwzc9p$('class', value);
  }
  BodyTagWithClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BodyTagWithClass',
    interfaces: [BodyTag]
  };
  function Body() {
    BodyTag.call(this, 'body');
  }
  Body.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Body',
    interfaces: [BodyTag]
  };
  function B() {
    BodyTag.call(this, 'b');
  }
  B.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'B',
    interfaces: [BodyTag]
  };
  function P() {
    BodyTag.call(this, 'p');
  }
  P.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'P',
    interfaces: [BodyTag]
  };
  function H1() {
    BodyTag.call(this, 'h1');
  }
  H1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H1',
    interfaces: [BodyTag]
  };
  function H2() {
    BodyTag.call(this, 'h2');
  }
  H2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H2',
    interfaces: [BodyTag]
  };
  function H4() {
    BodyTag.call(this, 'h4');
  }
  H4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H4',
    interfaces: [BodyTag]
  };
  function HR() {
    BodyTag.call(this, 'hr');
  }
  HR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HR',
    interfaces: [BodyTag]
  };
  function Div(classAttr) {
    BodyTagWithClass.call(this, 'div', classAttr);
  }
  Div.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Div',
    interfaces: [BodyTagWithClass]
  };
  function Header(classAttr) {
    BodyTagWithClass.call(this, 'header', classAttr);
  }
  Header.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Header',
    interfaces: [BodyTagWithClass]
  };
  function Button(classAttr) {
    BodyTagWithClass.call(this, 'button', classAttr);
  }
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [BodyTagWithClass]
  };
  function Span(classAttr) {
    BodyTagWithClass.call(this, 'span', classAttr);
  }
  Span.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Span',
    interfaces: [BodyTagWithClass]
  };
  function A() {
    BodyTag.call(this, 'a');
    this.href_30onjl$_0 = this.attributes;
  }
  var A$href_metadata = new PropertyMetadata('href');
  var getOrImplicitDefault = Kotlin.kotlin.collections.getOrImplicitDefault_t9ocha$;
  Object.defineProperty(A.prototype, 'href', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.href_30onjl$_0, A$href_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (href) {
      this.href_30onjl$_0.put_xwzc9p$(A$href_metadata.callableName, href);
    }
  });
  A.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: [BodyTag]
  };
  function Image() {
    BodyTag.call(this, 'img');
    this.src_eu5aro$_0 = this.attributes;
  }
  var Image$src_metadata = new PropertyMetadata('src');
  Object.defineProperty(Image.prototype, 'src', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrImplicitDefault(this.src_eu5aro$_0, Image$src_metadata.callableName)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (src) {
      this.src_eu5aro$_0.put_xwzc9p$(Image$src_metadata.callableName, src);
    }
  });
  Image.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Image',
    interfaces: [BodyTag]
  };
  function TableTag(name) {
    BodyTag.call(this, name);
  }
  TableTag.prototype.thead_2wd4r4$ = function (init) {
    return this.initTag_11d4c2$(new THead(), init);
  };
  TableTag.prototype.tbody_y9udji$ = function (init) {
    return this.initTag_11d4c2$(new TBody(), init);
  };
  TableTag.prototype.tfoot_xn935u$ = function (init) {
    return this.initTag_11d4c2$(new TFoot(), init);
  };
  TableTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableTag',
    interfaces: [BodyTag]
  };
  function TableBlock(name) {
    TableTag.call(this, name);
  }
  TableBlock.prototype.tr_26e0nc$ = function (init) {
    return this.initTag_11d4c2$(new TableRow(), init);
  };
  TableBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableBlock',
    interfaces: [TableTag]
  };
  function Table() {
    TableTag.call(this, 'table');
  }
  Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: [TableTag]
  };
  function THead() {
    TableBlock.call(this, 'thead');
  }
  THead.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'THead',
    interfaces: [TableBlock]
  };
  function TFoot() {
    TableBlock.call(this, 'tfoot');
  }
  TFoot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TFoot',
    interfaces: [TableBlock]
  };
  function TBody() {
    TableBlock.call(this, 'tbody');
  }
  TBody.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TBody',
    interfaces: [TableBlock]
  };
  function TableRowTag(name) {
    TableBlock.call(this, name);
    this.colspan_xryc71$_0 = new Natural(1);
    this.rowspan_merpsn$_0 = new Natural(1);
  }
  Object.defineProperty(TableRowTag.prototype, 'colspan', {
    get: function () {
      return this.colspan_xryc71$_0;
    },
    set: function (value) {
      var $receiver = this.attributes;
      var value_0 = value.toString();
      $receiver.put_xwzc9p$('colspan', value_0);
    }
  });
  Object.defineProperty(TableRowTag.prototype, 'rowspan', {
    get: function () {
      return this.rowspan_merpsn$_0;
    },
    set: function (value) {
      var $receiver = this.attributes;
      var value_0 = value.toString();
      $receiver.put_xwzc9p$('rowspan', value_0);
    }
  });
  TableRowTag.prototype.th_75avfw$ = function (rowspan, colspan, init) {
    if (rowspan === void 0)
      rowspan = new Natural(1);
    if (colspan === void 0)
      colspan = new Natural(1);
    var element = this.initTag_11d4c2$(new TableHeadInfo(), init);
    element.rowspan = rowspan;
    element.colspan = colspan;
  };
  TableRowTag.prototype.td_tluo0a$ = function (rowspan, colspan, init) {
    if (rowspan === void 0)
      rowspan = new Natural(1);
    if (colspan === void 0)
      colspan = new Natural(1);
    var element = this.initTag_11d4c2$(new TableDataInfo(), init);
    element.rowspan = rowspan;
    element.colspan = colspan;
  };
  TableRowTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableRowTag',
    interfaces: [TableBlock]
  };
  function TableRow() {
    TableRowTag.call(this, 'tr');
  }
  TableRow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableRow',
    interfaces: [TableRowTag]
  };
  function TableHeadInfo() {
    TableRowTag.call(this, 'th');
  }
  TableHeadInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableHeadInfo',
    interfaces: [TableRowTag]
  };
  function TableDataInfo() {
    TableRowTag.call(this, 'td');
  }
  TableDataInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableDataInfo',
    interfaces: [TableRowTag]
  };
  function html(init) {
    var html = new HTML();
    init(html);
    return html;
  }
  function HTMLRender() {
    Render.call(this);
  }
  Object.defineProperty(HTMLRender.prototype, 'name', {
    get: function () {
      return 'html';
    }
  });
  function HTMLRender$render$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Benchmarks report');
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css';
    $receiver_0.put_xwzc9p$('href', value);
    var $receiver_1 = $receiver.attributes;
    var value_0 = 'stylesheet';
    $receiver_1.put_xwzc9p$('rel', value_0);
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda_1($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'https://code.jquery.com/jquery-3.3.1.slim.min.js';
    $receiver_0.put_xwzc9p$('src', value);
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda_2($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js';
    $receiver_0.put_xwzc9p$('src', value);
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda_3($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js';
    $receiver_0.put_xwzc9p$('src', value);
    return Unit;
  }
  function HTMLRender$render$lambda$lambda($receiver) {
    $receiver.title_4u5i8k$(HTMLRender$render$lambda$lambda$lambda);
    $receiver.link_pywtue$(HTMLRender$render$lambda$lambda$lambda_0);
    $receiver.script_s9yxpj$(HTMLRender$render$lambda$lambda$lambda_1);
    $receiver.script_s9yxpj$(HTMLRender$render$lambda$lambda$lambda_2);
    $receiver.script_s9yxpj$(HTMLRender$render$lambda$lambda$lambda_3);
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'width:60px;height:60px;';
    $receiver_0.put_xwzc9p$('style', value);
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Benchmarks report');
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda_4($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'background-color:#161616;';
    $receiver_0.put_xwzc9p$('style', value);
    $receiver.img_ecjuzb$('https://dashboard.snapcraft.io/site_media/appmedia/2018/04/256px-kotlin-logo-svg.png', HTMLRender$render$lambda$lambda$lambda$lambda);
    $receiver.span_7elwq4$('navbar-brand mb-0 h1', HTMLRender$render$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda$lambda_3($receiver) {
    return Unit;
  }
  function HTMLRender$render$lambda$lambda$lambda_5(closure$report, this$HTMLRender, closure$onlyChanges) {
    return function ($receiver) {
      $receiver.p_cuoz3g$(HTMLRender$render$lambda$lambda$lambda$lambda_1);
      this$HTMLRender.renderEnvironmentTable_0($receiver, closure$report.environments);
      this$HTMLRender.renderCompilerTable_0($receiver, closure$report.compilers);
      $receiver.hr_uan1mu$(HTMLRender$render$lambda$lambda$lambda$lambda_2);
      this$HTMLRender.renderStatusSummary_0($receiver, closure$report);
      $receiver.hr_uan1mu$(HTMLRender$render$lambda$lambda$lambda$lambda_3);
      this$HTMLRender.renderPerformanceSummary_0($receiver, closure$report);
      this$HTMLRender.renderPerformanceDetails_0($receiver, closure$report, closure$onlyChanges);
      return Unit;
    };
  }
  function HTMLRender$render$lambda$lambda_0(closure$report, this$HTMLRender, closure$onlyChanges) {
    return function ($receiver) {
      $receiver.header_vbd015$('navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar', HTMLRender$render$lambda$lambda$lambda_4);
      $receiver.div_g2x9wh$('container-fluid', HTMLRender$render$lambda$lambda$lambda_5(closure$report, this$HTMLRender, closure$onlyChanges));
      return Unit;
    };
  }
  function HTMLRender$render$lambda(closure$report, this$HTMLRender, closure$onlyChanges) {
    return function ($receiver) {
      $receiver.head_8o7jwc$(HTMLRender$render$lambda$lambda);
      $receiver.body_mp9ow2$(HTMLRender$render$lambda$lambda_0(closure$report, this$HTMLRender, closure$onlyChanges));
      return Unit;
    };
  }
  HTMLRender.prototype.render_n8b5gj$$default = function (report, onlyChanges) {
    return html(HTMLRender$render$lambda(report, this, onlyChanges)).toString();
  };
  function HTMLRender$formatComparedTableData$lambda(closure$compareToData, closure$data) {
    return function ($receiver) {
      if (closure$compareToData != null) {
        var $receiver_0 = closure$compareToData;
        if (!equals($receiver_0, closure$data)) {
          $receiver.attributes.put_xwzc9p$('bgcolor', 'yellow');
        }
      }
      if (closure$data.length === 0) {
        $receiver.unaryPlus_pdl1vz$('-');
      }
       else {
        $receiver.unaryPlus_pdl1vz$(closure$data);
      }
      return Unit;
    };
  }
  HTMLRender.prototype.formatComparedTableData_0 = function ($receiver, data, compareToData) {
    $receiver.td_tluo0a$(void 0, void 0, HTMLRender$formatComparedTableData$lambda(compareToData, data));
  };
  function HTMLRender$renderEnvironment$lambda$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.attributes.put_xwzc9p$('scope', 'row');
      $receiver.unaryPlus_pdl1vz$(closure$name);
      return Unit;
    };
  }
  function HTMLRender$renderEnvironment$lambda$lambda(closure$name, closure$environment, closure$compareTo, this$HTMLRender) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderEnvironment$lambda$lambda$lambda(closure$name));
      tmp$ = closure$environment.machine.os;
      tmp$_1 = (tmp$_0 = closure$compareTo != null ? closure$compareTo.machine : null) != null ? tmp$_0.os : null;
      this$HTMLRender.formatComparedTableData_0($receiver, tmp$, tmp$_1);
      tmp$_2 = closure$environment.machine.cpu;
      tmp$_4 = (tmp$_3 = closure$compareTo != null ? closure$compareTo.machine : null) != null ? tmp$_3.cpu : null;
      this$HTMLRender.formatComparedTableData_0($receiver, tmp$_2, tmp$_4);
      tmp$_5 = closure$environment.jdk.version;
      tmp$_7 = (tmp$_6 = closure$compareTo != null ? closure$compareTo.jdk : null) != null ? tmp$_6.version : null;
      this$HTMLRender.formatComparedTableData_0($receiver, tmp$_5, tmp$_7);
      tmp$_8 = closure$environment.jdk.vendor;
      tmp$_10 = (tmp$_9 = closure$compareTo != null ? closure$compareTo.jdk : null) != null ? tmp$_9.vendor : null;
      this$HTMLRender.formatComparedTableData_0($receiver, tmp$_8, tmp$_10);
      return Unit;
    };
  }
  function HTMLRender$renderEnvironment$lambda(closure$name, closure$environment, closure$compareTo, this$HTMLRender) {
    return function ($receiver) {
      $receiver.tr_26e0nc$(HTMLRender$renderEnvironment$lambda$lambda(closure$name, closure$environment, closure$compareTo, this$HTMLRender));
      return Unit;
    };
  }
  HTMLRender.prototype.renderEnvironment_0 = function ($receiver, environment, name, compareTo) {
    if (compareTo === void 0)
      compareTo = null;
    $receiver.tbody_y9udji$(HTMLRender$renderEnvironment$lambda(name, environment, compareTo, this));
  };
  function HTMLRender$renderEnvironmentTable$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Environment');
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Run');
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Machine');
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('JDK');
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda$lambda($receiver) {
    $receiver.th_75avfw$(new Natural(2), void 0, HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda);
    $receiver.th_75avfw$(void 0, new Natural(2), HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_0);
    $receiver.th_75avfw$(void 0, new Natural(2), HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('OS');
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('CPU');
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('Version');
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Vendor');
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda$lambda_0($receiver) {
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_2);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_3);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_4);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderEnvironmentTable$lambda$lambda$lambda$lambda_5);
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda$lambda($receiver) {
    $receiver.tr_26e0nc$(HTMLRender$renderEnvironmentTable$lambda$lambda$lambda);
    $receiver.tr_26e0nc$(HTMLRender$renderEnvironmentTable$lambda$lambda$lambda_0);
    return Unit;
  }
  function HTMLRender$renderEnvironmentTable$lambda_0(closure$environments, this$HTMLRender) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'table table-sm table-bordered table-hover';
      $receiver_0.put_xwzc9p$('class', value);
      var $receiver_1 = $receiver.attributes;
      var value_0 = 'width:initial;';
      $receiver_1.put_xwzc9p$('style', value_0);
      var firstEnvironment = closure$environments.first;
      var secondEnvironment = closure$environments.second;
      $receiver.thead_2wd4r4$(HTMLRender$renderEnvironmentTable$lambda$lambda);
      this$HTMLRender.renderEnvironment_0($receiver, firstEnvironment, 'First');
      if (secondEnvironment != null) {
        this$HTMLRender.renderEnvironment_0($receiver, secondEnvironment, 'Second', firstEnvironment);
      }
      return Unit;
    };
  }
  HTMLRender.prototype.renderEnvironmentTable_0 = function ($receiver, environments) {
    $receiver.h4_7cyf88$(HTMLRender$renderEnvironmentTable$lambda);
    $receiver.table_i0l9qi$(HTMLRender$renderEnvironmentTable$lambda_0(environments, this));
  };
  function HTMLRender$renderCompiler$lambda$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.attributes.put_xwzc9p$('scope', 'row');
      $receiver.unaryPlus_pdl1vz$(closure$name);
      return Unit;
    };
  }
  function HTMLRender$renderCompiler$lambda$lambda(closure$name, closure$compiler, closure$compareTo, this$HTMLRender) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderCompiler$lambda$lambda$lambda(closure$name));
      tmp$ = closure$compiler.backend.type.type;
      tmp$_2 = (tmp$_1 = (tmp$_0 = closure$compareTo != null ? closure$compareTo.backend : null) != null ? tmp$_0.type : null) != null ? tmp$_1.type : null;
      this$HTMLRender.formatComparedTableData_0($receiver, tmp$, tmp$_2);
      tmp$_3 = closure$compiler.backend.version;
      tmp$_5 = (tmp$_4 = closure$compareTo != null ? closure$compareTo.backend : null) != null ? tmp$_4.version : null;
      this$HTMLRender.formatComparedTableData_0($receiver, tmp$_3, tmp$_5);
      tmp$_6 = joinToString(closure$compiler.backend.flags);
      tmp$_9 = (tmp$_8 = (tmp$_7 = closure$compareTo != null ? closure$compareTo.backend : null) != null ? tmp$_7.flags : null) != null ? joinToString(tmp$_8) : null;
      this$HTMLRender.formatComparedTableData_0($receiver, tmp$_6, tmp$_9);
      this$HTMLRender.formatComparedTableData_0($receiver, closure$compiler.kotlinVersion, closure$compareTo != null ? closure$compareTo.kotlinVersion : null);
      return Unit;
    };
  }
  function HTMLRender$renderCompiler$lambda(closure$name, closure$compiler, closure$compareTo, this$HTMLRender) {
    return function ($receiver) {
      $receiver.tr_26e0nc$(HTMLRender$renderCompiler$lambda$lambda(closure$name, closure$compiler, closure$compareTo, this$HTMLRender));
      return Unit;
    };
  }
  HTMLRender.prototype.renderCompiler_0 = function ($receiver, compiler, name, compareTo) {
    if (compareTo === void 0)
      compareTo = null;
    $receiver.tbody_y9udji$(HTMLRender$renderCompiler$lambda(name, compiler, compareTo, this));
  };
  function HTMLRender$renderCompilerTable$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Compiler');
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Run');
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Backend');
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Kotlin');
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda$lambda$lambda($receiver) {
    $receiver.th_75avfw$(new Natural(2), void 0, HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda);
    $receiver.th_75avfw$(void 0, new Natural(3), HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_0);
    $receiver.th_75avfw$(new Natural(2), void 0, HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Type');
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Version');
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('Flags');
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda$lambda$lambda_0($receiver) {
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_2);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_3);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderCompilerTable$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda$lambda($receiver) {
    $receiver.tr_26e0nc$(HTMLRender$renderCompilerTable$lambda$lambda$lambda);
    $receiver.tr_26e0nc$(HTMLRender$renderCompilerTable$lambda$lambda$lambda_0);
    return Unit;
  }
  function HTMLRender$renderCompilerTable$lambda_0(closure$compilers, this$HTMLRender) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'table table-sm table-bordered table-hover';
      $receiver_0.put_xwzc9p$('class', value);
      var $receiver_1 = $receiver.attributes;
      var value_0 = 'width:initial;';
      $receiver_1.put_xwzc9p$('style', value_0);
      var firstCompiler = closure$compilers.first;
      var secondCompiler = closure$compilers.second;
      $receiver.thead_2wd4r4$(HTMLRender$renderCompilerTable$lambda$lambda);
      this$HTMLRender.renderCompiler_0($receiver, firstCompiler, 'First');
      if (secondCompiler != null) {
        this$HTMLRender.renderCompiler_0($receiver, secondCompiler, 'Second', firstCompiler);
      }
      return Unit;
    };
  }
  HTMLRender.prototype.renderCompilerTable_0 = function ($receiver, compilers) {
    $receiver.h4_7cyf88$(HTMLRender$renderCompilerTable$lambda);
    $receiver.table_i0l9qi$(HTMLRender$renderCompilerTable$lambda_0(compilers, this));
  };
  function HTMLRender$renderBucketInfo$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.attributes.put_xwzc9p$('scope', 'row');
      $receiver.unaryPlus_pdl1vz$(closure$name);
      return Unit;
    };
  }
  function HTMLRender$renderBucketInfo$lambda$lambda_0(closure$bucket) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$bucket.size.toString());
      return Unit;
    };
  }
  function HTMLRender$renderBucketInfo$lambda(closure$name, closure$bucket) {
    return function ($receiver) {
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderBucketInfo$lambda$lambda(closure$name));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderBucketInfo$lambda$lambda_0(closure$bucket));
      return Unit;
    };
  }
  HTMLRender.prototype.renderBucketInfo_0 = function ($receiver, bucket, name) {
    if (!bucket.isEmpty()) {
      $receiver.tr_26e0nc$(HTMLRender$renderBucketInfo$lambda(name, bucket));
    }
  };
  function HTMLRender$renderCollapsedData$lambda$lambda$lambda$lambda(closure$tagName, closure$name) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var key = 'data-toggle';
      var value = 'collapse';
      $receiver_0.put_xwzc9p$(key, value);
      var $receiver_1 = $receiver.attributes;
      var key_0 = 'data-target';
      var value_0 = '#' + closure$tagName;
      $receiver_1.put_xwzc9p$(key_0, value_0);
      $receiver.unaryPlus_pdl1vz$(closure$name);
      return Unit;
    };
  }
  function HTMLRender$renderCollapsedData$lambda$lambda$lambda(closure$colorStyle, closure$tagName, closure$name) {
    return function ($receiver) {
      $receiver.attributes.put_xwzc9p$('id', 'heading');
      var $receiver_0 = $receiver.attributes;
      var value = 'padding: 0;' + closure$colorStyle;
      $receiver_0.put_xwzc9p$('style', value);
      $receiver.button_1kztdo$('btn btn-link', HTMLRender$renderCollapsedData$lambda$lambda$lambda$lambda(closure$tagName, closure$name));
      return Unit;
    };
  }
  function HTMLRender$renderCollapsedData$lambda$lambda$lambda$lambda_0(closure$init) {
    return function ($receiver) {
      closure$init($receiver);
      return Unit;
    };
  }
  function HTMLRender$renderCollapsedData$lambda$lambda$lambda_0(closure$tagName, closure$init) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = closure$tagName;
      $receiver_0.put_xwzc9p$('id', value);
      $receiver.div_g2x9wh$('accordion-inner', HTMLRender$renderCollapsedData$lambda$lambda$lambda$lambda_0(closure$init));
      return Unit;
    };
  }
  function HTMLRender$renderCollapsedData$lambda$lambda(closure$colorStyle, closure$tagName, closure$name, closure$show, closure$init) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'border-bottom: 1px solid rgba(0,0,0,.125);';
      $receiver_0.put_xwzc9p$('style', value);
      $receiver.div_g2x9wh$('card-header', HTMLRender$renderCollapsedData$lambda$lambda$lambda(closure$colorStyle, closure$tagName, closure$name));
      $receiver.div_g2x9wh$('collapse ' + closure$show, HTMLRender$renderCollapsedData$lambda$lambda$lambda_0(closure$tagName, closure$init));
      return Unit;
    };
  }
  function HTMLRender$renderCollapsedData$lambda(closure$colorStyle, closure$tagName, closure$name, closure$show, closure$init) {
    return function ($receiver) {
      $receiver.div_g2x9wh$('card', HTMLRender$renderCollapsedData$lambda$lambda(closure$colorStyle, closure$tagName, closure$name, closure$show, closure$init));
      return Unit;
    };
  }
  HTMLRender.prototype.renderCollapsedData_0 = function ($receiver, name, isCollapsed, colorStyle, init) {
    if (isCollapsed === void 0)
      isCollapsed = false;
    if (colorStyle === void 0)
      colorStyle = '';
    var show = !isCollapsed ? 'show' : '';
    var tagName = replace(name, 32, 95);
    $receiver.div_g2x9wh$('accordion', HTMLRender$renderCollapsedData$lambda(colorStyle, tagName, name, show, init));
  };
  function HTMLRender$renderTableFromList$lambda$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$name);
      return Unit;
    };
  }
  function HTMLRender$renderTableFromList$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderTableFromList$lambda$lambda$lambda(closure$name));
      return Unit;
    };
  }
  function HTMLRender$renderTableFromList$lambda(closure$name) {
    return function ($receiver) {
      $receiver.tr_26e0nc$(HTMLRender$renderTableFromList$lambda$lambda(closure$name));
      return Unit;
    };
  }
  function HTMLRender$renderTableFromList$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function HTMLRender$renderTableFromList$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderTableFromList$lambda$lambda$lambda$lambda(closure$it));
      return Unit;
    };
  }
  function HTMLRender$renderTableFromList$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.tr_26e0nc$(HTMLRender$renderTableFromList$lambda$lambda$lambda_0(closure$it));
      return Unit;
    };
  }
  HTMLRender.prototype.renderTableFromList_0 = function ($receiver, list, name) {
    if (!list.isEmpty()) {
      $receiver.thead_2wd4r4$(HTMLRender$renderTableFromList$lambda(name));
      var tmp$;
      tmp$ = list.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.tbody_y9udji$(HTMLRender$renderTableFromList$lambda$lambda_0(element));
      }
    }
  };
  function HTMLRender$renderStatusSummary$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Status Summary');
    return Unit;
  }
  function HTMLRender$renderStatusSummary$lambda_0($receiver) {
    $receiver.attributes.put_xwzc9p$('role', 'alert');
    $receiver.unaryPlus_pdl1vz$('All benchmarks passed!');
    return Unit;
  }
  function HTMLRender$renderStatusSummary$lambda_1($receiver) {
    $receiver.attributes.put_xwzc9p$('role', 'alert');
    $receiver.unaryPlus_pdl1vz$('There are failed benchmarks!');
    return Unit;
  }
  function HTMLRender$renderStatusSummary$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Status Group');
    return Unit;
  }
  function HTMLRender$renderStatusSummary$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('#');
    return Unit;
  }
  function HTMLRender$renderStatusSummary$lambda$lambda$lambda($receiver) {
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderStatusSummary$lambda$lambda$lambda$lambda);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderStatusSummary$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function HTMLRender$renderStatusSummary$lambda$lambda($receiver) {
    $receiver.tr_26e0nc$(HTMLRender$renderStatusSummary$lambda$lambda$lambda);
    return Unit;
  }
  function HTMLRender$renderStatusSummary$lambda$lambda_0(closure$failedBenchmarks, this$HTMLRender, closure$newFailures, closure$newPasses, closure$report) {
    return function ($receiver) {
      this$HTMLRender.renderBucketInfo_0($receiver, closure$failedBenchmarks, 'Failed (total)');
      this$HTMLRender.renderBucketInfo_0($receiver, closure$newFailures, 'New Failures');
      this$HTMLRender.renderBucketInfo_0($receiver, closure$newPasses, 'New Passes');
      this$HTMLRender.renderBucketInfo_0($receiver, closure$report.addedBenchmarks, 'Added');
      this$HTMLRender.renderBucketInfo_0($receiver, closure$report.removedBenchmarks, 'Removed');
      return Unit;
    };
  }
  function HTMLRender$renderStatusSummary$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Total becnhmarks number');
    return Unit;
  }
  function HTMLRender$renderStatusSummary$lambda$lambda$lambda$lambda_2(closure$report) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$report.benchmarksNumber.toString());
      return Unit;
    };
  }
  function HTMLRender$renderStatusSummary$lambda$lambda$lambda_0(closure$report) {
    return function ($receiver) {
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderStatusSummary$lambda$lambda$lambda$lambda_1);
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderStatusSummary$lambda$lambda$lambda$lambda_2(closure$report));
      return Unit;
    };
  }
  function HTMLRender$renderStatusSummary$lambda$lambda_1(closure$report) {
    return function ($receiver) {
      $receiver.tr_26e0nc$(HTMLRender$renderStatusSummary$lambda$lambda$lambda_0(closure$report));
      return Unit;
    };
  }
  function HTMLRender$renderStatusSummary$lambda_2(closure$failedBenchmarks, this$HTMLRender, closure$newFailures, closure$newPasses, closure$report) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'table table-sm table-striped table-hover';
      $receiver_0.put_xwzc9p$('class', value);
      var $receiver_1 = $receiver.attributes;
      var value_0 = 'width:initial; font-size: 11pt;';
      $receiver_1.put_xwzc9p$('style', value_0);
      $receiver.thead_2wd4r4$(HTMLRender$renderStatusSummary$lambda$lambda);
      $receiver.tbody_y9udji$(HTMLRender$renderStatusSummary$lambda$lambda_0(closure$failedBenchmarks, this$HTMLRender, closure$newFailures, closure$newPasses, closure$report));
      $receiver.tfoot_xn935u$(HTMLRender$renderStatusSummary$lambda$lambda_1(closure$report));
      return Unit;
    };
  }
  function HTMLRender$renderStatusSummary$lambda$lambda_2(closure$newFailures, this$HTMLRender, closure$failedBenchmarks) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'table table-sm table-striped table-hover';
      $receiver_0.put_xwzc9p$('class', value);
      var $receiver_1 = $receiver.attributes;
      var value_0 = 'width:initial; font-size: 11pt;';
      $receiver_1.put_xwzc9p$('style', value_0);
      var $receiver_2 = closure$newFailures;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
      var tmp$;
      tmp$ = $receiver_2.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.field);
      }
      var newFailuresList = destination;
      this$HTMLRender.renderTableFromList_0($receiver, newFailuresList, 'New Failures');
      var $receiver_3 = closure$failedBenchmarks;
      var destination_0 = ArrayList_init_0();
      var tmp$_0;
      tmp$_0 = $receiver_3.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (!newFailuresList.contains_11rb$(element))
          destination_0.add_11rb$(element);
      }
      var existingFailures = destination_0;
      this$HTMLRender.renderTableFromList_0($receiver, existingFailures, 'Existing Failures');
      return Unit;
    };
  }
  function HTMLRender$renderStatusSummary$lambda_3(closure$newFailures, this$HTMLRender, closure$failedBenchmarks) {
    return function ($receiver) {
      $receiver.table_i0l9qi$(HTMLRender$renderStatusSummary$lambda$lambda_2(closure$newFailures, this$HTMLRender, closure$failedBenchmarks));
      return Unit;
    };
  }
  function HTMLRender$renderStatusSummary$lambda$lambda_3(closure$newPasses, this$HTMLRender) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'table table-sm table-striped table-hover';
      $receiver_0.put_xwzc9p$('class', value);
      var $receiver_1 = $receiver.attributes;
      var value_0 = 'width:initial; font-size: 11pt;';
      $receiver_1.put_xwzc9p$('style', value_0);
      var tmp$ = this$HTMLRender;
      var $receiver_2 = closure$newPasses;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
      var tmp$_0;
      tmp$_0 = $receiver_2.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.field);
      }
      tmp$.renderTableFromList_0($receiver, destination, 'New Passes');
      return Unit;
    };
  }
  function HTMLRender$renderStatusSummary$lambda_4(closure$newPasses, this$HTMLRender) {
    return function ($receiver) {
      $receiver.table_i0l9qi$(HTMLRender$renderStatusSummary$lambda$lambda_3(closure$newPasses, this$HTMLRender));
      return Unit;
    };
  }
  HTMLRender.prototype.renderStatusSummary_0 = function ($receiver, report) {
    $receiver.h4_7cyf88$(HTMLRender$renderStatusSummary$lambda);
    var failedBenchmarks = report.failedBenchmarks;
    if (failedBenchmarks.isEmpty()) {
      $receiver.div_g2x9wh$('alert alert-success', HTMLRender$renderStatusSummary$lambda_0);
    }
     else {
      $receiver.div_g2x9wh$('alert alert-danger', HTMLRender$renderStatusSummary$lambda_1);
    }
    var benchmarksWithChangedStatus = report.getBenchmarksWithChangedStatus();
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = benchmarksWithChangedStatus.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.current === BenchmarkResult$Status$FAILED_getInstance())
        destination.add_11rb$(element);
    }
    var newFailures = destination;
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = benchmarksWithChangedStatus.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.current === BenchmarkResult$Status$PASSED_getInstance())
        destination_0.add_11rb$(element_0);
    }
    var newPasses = destination_0;
    $receiver.table_i0l9qi$(HTMLRender$renderStatusSummary$lambda_2(failedBenchmarks, this, newFailures, newPasses, report));
    if (!failedBenchmarks.isEmpty()) {
      this.renderCollapsedData_0($receiver, 'Failures', void 0, 'background-color: lightpink', HTMLRender$renderStatusSummary$lambda_3(newFailures, this, failedBenchmarks));
    }
    if (!newPasses.isEmpty()) {
      this.renderCollapsedData_0($receiver, 'New Passes', void 0, 'background-color: lightgreen', HTMLRender$renderStatusSummary$lambda_4(newPasses, this));
    }
  };
  function HTMLRender$renderPerformanceSummary$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Performance Summary');
    return Unit;
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Change');
    return Unit;
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('#');
    return Unit;
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Maximum');
    return Unit;
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Geometric mean');
    return Unit;
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda($receiver) {
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_0);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_1);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda($receiver) {
    $receiver.tr_26e0nc$(HTMLRender$renderPerformanceSummary$lambda$lambda$lambda);
    return Unit;
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Regressions');
    return Unit;
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_4(closure$report) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$report.regressions.size.toString());
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_5(closure$maximumRegression, closure$maximumImprovement, this$HTMLRender) {
    return function ($receiver) {
      var tmp$ = $receiver.attributes;
      var tmp$_0 = closure$maximumRegression;
      var tmp$_1 = closure$maximumRegression;
      var x = closure$maximumImprovement;
      var b = Math_0.abs(x);
      var value = (new HTMLRender$ColoredCell(tmp$_0 / Math_0.max(tmp$_1, b))).backgroundStyle;
      tmp$.put_xwzc9p$('bgcolor', value);
      $receiver.unaryPlus_pdl1vz$(this$HTMLRender.formatValue_8555vt$(closure$maximumRegression, true));
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_6(closure$regressionsGeometricMean, closure$improvementsGeometricMean, closure$report, this$HTMLRender) {
    return function ($receiver) {
      var tmp$ = $receiver.attributes;
      var tmp$_0 = closure$regressionsGeometricMean;
      var tmp$_1 = closure$regressionsGeometricMean;
      var x = closure$improvementsGeometricMean;
      var b = Math_0.abs(x);
      var value = (new HTMLRender$ColoredCell(tmp$_0 / Math_0.max(tmp$_1, b))).backgroundStyle;
      tmp$.put_xwzc9p$('bgcolor', value);
      $receiver.unaryPlus_pdl1vz$(this$HTMLRender.formatValue_8555vt$(closure$report.regressionsGeometricMean, true));
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda_0(closure$report, closure$maximumRegression, closure$maximumImprovement, this$HTMLRender, closure$regressionsGeometricMean, closure$improvementsGeometricMean) {
    return function ($receiver) {
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_3);
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_4(closure$report));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_5(closure$maximumRegression, closure$maximumImprovement, this$HTMLRender));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_6(closure$regressionsGeometricMean, closure$improvementsGeometricMean, closure$report, this$HTMLRender));
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('Improvements');
    return Unit;
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_8(closure$report) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$report.improvements.size.toString());
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_9(closure$maximumImprovement, closure$maximumRegression, closure$report, this$HTMLRender) {
    return function ($receiver) {
      var tmp$ = $receiver.attributes;
      var tmp$_0 = closure$maximumImprovement;
      var tmp$_1 = closure$maximumRegression;
      var x = closure$maximumImprovement;
      var b = Math_0.abs(x);
      var value = (new HTMLRender$ColoredCell(tmp$_0 / Math_0.max(tmp$_1, b))).backgroundStyle;
      tmp$.put_xwzc9p$('bgcolor', value);
      $receiver.unaryPlus_pdl1vz$(this$HTMLRender.formatValue_8555vt$(closure$report.maximumImprovement, true));
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_10(closure$improvementsGeometricMean, closure$regressionsGeometricMean, closure$report, this$HTMLRender) {
    return function ($receiver) {
      var tmp$ = $receiver.attributes;
      var tmp$_0 = closure$improvementsGeometricMean;
      var tmp$_1 = closure$regressionsGeometricMean;
      var x = closure$improvementsGeometricMean;
      var b = Math_0.abs(x);
      var value = (new HTMLRender$ColoredCell(tmp$_0 / Math_0.max(tmp$_1, b))).backgroundStyle;
      tmp$.put_xwzc9p$('bgcolor', value);
      $receiver.unaryPlus_pdl1vz$(this$HTMLRender.formatValue_8555vt$(closure$report.improvementsGeometricMean, true));
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda$lambda_1(closure$report, closure$maximumImprovement, closure$maximumRegression, this$HTMLRender, closure$improvementsGeometricMean, closure$regressionsGeometricMean) {
    return function ($receiver) {
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_7);
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_8(closure$report));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_9(closure$maximumImprovement, closure$maximumRegression, closure$report, this$HTMLRender));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderPerformanceSummary$lambda$lambda$lambda$lambda_10(closure$improvementsGeometricMean, closure$regressionsGeometricMean, closure$report, this$HTMLRender));
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceSummary$lambda$lambda_0(closure$report, closure$maximumRegression, closure$maximumImprovement, this$HTMLRender, closure$regressionsGeometricMean, closure$improvementsGeometricMean) {
    return function ($receiver) {
      if (!closure$report.regressions.isEmpty()) {
        $receiver.tr_26e0nc$(HTMLRender$renderPerformanceSummary$lambda$lambda$lambda_0(closure$report, closure$maximumRegression, closure$maximumImprovement, this$HTMLRender, closure$regressionsGeometricMean, closure$improvementsGeometricMean));
      }
      if (!closure$report.improvements.isEmpty()) {
        $receiver.tr_26e0nc$(HTMLRender$renderPerformanceSummary$lambda$lambda$lambda_1(closure$report, closure$maximumImprovement, closure$maximumRegression, this$HTMLRender, closure$improvementsGeometricMean, closure$regressionsGeometricMean));
      }
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceSummary$lambda_0(closure$report, this$HTMLRender) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'table table-sm table-striped table-hover';
      $receiver_0.put_xwzc9p$('class', value);
      var $receiver_1 = $receiver.attributes;
      var value_0 = 'width:initial;';
      $receiver_1.put_xwzc9p$('style', value_0);
      $receiver.thead_2wd4r4$(HTMLRender$renderPerformanceSummary$lambda$lambda);
      var maximumRegression = closure$report.maximumRegression;
      var maximumImprovement = closure$report.maximumImprovement;
      var regressionsGeometricMean = closure$report.regressionsGeometricMean;
      var improvementsGeometricMean = closure$report.improvementsGeometricMean;
      $receiver.tbody_y9udji$(HTMLRender$renderPerformanceSummary$lambda$lambda_0(closure$report, maximumRegression, maximumImprovement, this$HTMLRender, regressionsGeometricMean, improvementsGeometricMean));
      return Unit;
    };
  }
  HTMLRender.prototype.renderPerformanceSummary_0 = function ($receiver, report) {
    if (!report.improvements.isEmpty() || !report.regressions.isEmpty()) {
      $receiver.h4_7cyf88$(HTMLRender$renderPerformanceSummary$lambda);
      $receiver.table_i0l9qi$(HTMLRender$renderPerformanceSummary$lambda_0(report, this));
    }
  };
  function HTMLRender$renderBenchmarksDetails$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$name);
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda$lambda_0(closure$fullSet, closure$name) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(toString(getValue(closure$fullSet, closure$name).first));
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda$lambda_1(closure$fullSet, closure$name) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(toString(getValue(closure$fullSet, closure$name).second));
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda$lambda_2(closure$change, closure$bucket) {
    return function ($receiver) {
      var tmp$ = $receiver.attributes;
      var tmp$_0 = closure$change.first.mean;
      var x = first_0(closure$bucket.values).first.mean;
      var value = (new HTMLRender$ColoredCell(tmp$_0 / Math_0.abs(x))).backgroundStyle;
      tmp$.put_xwzc9p$('bgcolor', value);
      $receiver.unaryPlus_pdl1vz$(closure$change.first.toString() + ' %');
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda$lambda_3(closure$change, closure$bucket) {
    return function ($receiver) {
      var scaledRatio = closure$change.first.mean < 0 ? (1 - closure$change.second.mean) / (-1 + first_0(closure$bucket.values).second.mean) : closure$change.second.mean / first_0(closure$bucket.values).second.mean;
      var $receiver_0 = $receiver.attributes;
      var value = (new HTMLRender$ColoredCell(scaledRatio)).backgroundStyle;
      $receiver_0.put_xwzc9p$('bgcolor', value);
      $receiver.unaryPlus_pdl1vz$(closure$change.second.toString());
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda(closure$rowStyle, closure$name, closure$fullSet, closure$change, closure$bucket) {
    return function ($receiver) {
      if (closure$rowStyle != null) {
        var closure$rowStyle_0 = closure$rowStyle;
        $receiver.attributes.put_xwzc9p$('style', closure$rowStyle_0);
      }
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda(closure$name));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda_0(closure$fullSet, closure$name));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda_1(closure$fullSet, closure$name));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda_2(closure$change, closure$bucket));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda_3(closure$change, closure$bucket));
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda$lambda_4(closure$name) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$name);
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda$lambda_5(closure$value, closure$placeholder) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.unaryPlus_pdl1vz$((tmp$_0 = (tmp$ = closure$value.first) != null ? tmp$.toString() : null) != null ? tmp$_0 : closure$placeholder);
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda$lambda_6(closure$value, closure$placeholder) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.unaryPlus_pdl1vz$((tmp$_0 = (tmp$ = closure$value.second) != null ? tmp$.toString() : null) != null ? tmp$_0 : closure$placeholder);
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda$lambda_7(closure$placeholder) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$placeholder);
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda$lambda_8(closure$placeholder) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$placeholder);
      return Unit;
    };
  }
  function HTMLRender$renderBenchmarksDetails$lambda_0(closure$name, closure$value, closure$placeholder) {
    return function ($receiver) {
      $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda_4(closure$name));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda_5(closure$value, closure$placeholder));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda_6(closure$value, closure$placeholder));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda_7(closure$placeholder));
      $receiver.td_tluo0a$(void 0, void 0, HTMLRender$renderBenchmarksDetails$lambda$lambda_8(closure$placeholder));
      return Unit;
    };
  }
  HTMLRender.prototype.renderBenchmarksDetails_0 = function ($receiver, fullSet, bucket, rowStyle) {
    if (bucket === void 0)
      bucket = null;
    if (rowStyle === void 0)
      rowStyle = null;
    var tmp$, tmp$_0;
    if (bucket != null) {
      tmp$ = bucket.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_1 = tmp$.next();
        var name = tmp$_1.key;
        var change = tmp$_1.value;
        $receiver.tr_26e0nc$(HTMLRender$renderBenchmarksDetails$lambda(rowStyle, name, fullSet, change, bucket));
      }
    }
     else {
      var placeholder = '-';
      tmp$_0 = fullSet.entries.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_2 = tmp$_0.next();
        var name_0 = tmp$_2.key;
        var value = tmp$_2.value;
        $receiver.tr_26e0nc$(HTMLRender$renderBenchmarksDetails$lambda_0(name_0, value, placeholder));
      }
    }
  };
  function HTMLRender$renderPerformanceDetails$lambda($receiver) {
    $receiver.attributes.put_xwzc9p$('role', 'alert');
    $receiver.unaryPlus_pdl1vz$('All becnhmarks are stable!');
    return Unit;
  }
  function HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Benchmark');
    return Unit;
  }
  function HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('First score');
    return Unit;
  }
  function HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Second score');
    return Unit;
  }
  function HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Percent');
    return Unit;
  }
  function HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Ratio');
    return Unit;
  }
  function HTMLRender$renderPerformanceDetails$lambda$lambda$lambda($receiver) {
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda_0);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda_1);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda_2);
    $receiver.th_75avfw$(void 0, void 0, HTMLRender$renderPerformanceDetails$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function HTMLRender$renderPerformanceDetails$lambda$lambda($receiver) {
    $receiver.tr_26e0nc$(HTMLRender$renderPerformanceDetails$lambda$lambda$lambda);
    return Unit;
  }
  function HTMLRender$renderPerformanceDetails$lambda$lambda_0(closure$report, closure$geoMeanChangeMap, this$HTMLRender, closure$onlyChanges) {
    return function ($receiver) {
      this$HTMLRender.renderBenchmarksDetails_0($receiver, mutableMapOf([to(ensureNotNull(closure$report.geoMeanBenchmark.first).meanBenchmark.name, closure$report.geoMeanBenchmark)]), closure$geoMeanChangeMap, 'border-bottom: 2.3pt solid black; border-top: 2.3pt solid black');
      this$HTMLRender.renderBenchmarksDetails_0($receiver, closure$report.mergedReport, closure$report.regressions);
      this$HTMLRender.renderBenchmarksDetails_0($receiver, closure$report.mergedReport, closure$report.improvements);
      if (!closure$onlyChanges) {
        var tmp$ = this$HTMLRender;
        var $receiver_0 = closure$report.mergedReport;
        var destination = LinkedHashMap_init();
        var tmp$_0;
        tmp$_0 = $receiver_0.entries.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          var closure$report_0 = closure$report;
          if (!closure$report_0.regressions.keys.contains_11rb$(element.key) && !closure$report_0.improvements.keys.contains_11rb$(element.key)) {
            destination.put_xwzc9p$(element.key, element.value);
          }
        }
        tmp$.renderBenchmarksDetails_0($receiver, destination);
      }
      return Unit;
    };
  }
  function HTMLRender$renderPerformanceDetails$lambda_0(closure$report, this$HTMLRender, closure$onlyChanges) {
    return function ($receiver) {
      $receiver.attributes.put_xwzc9p$('id', 'result');
      var $receiver_0 = $receiver.attributes;
      var value = 'table table-striped table-bordered';
      $receiver_0.put_xwzc9p$('class', value);
      $receiver.thead_2wd4r4$(HTMLRender$renderPerformanceDetails$lambda$lambda);
      var tmp$;
      if (closure$report.geoMeanScoreChange != null) {
        var closure$report_0 = closure$report;
        tmp$ = mapOf(to(ensureNotNull(closure$report_0.geoMeanBenchmark.first).meanBenchmark.name, ensureNotNull(closure$report_0.geoMeanScoreChange)));
      }
       else
        tmp$ = null;
      var geoMeanChangeMap = tmp$;
      $receiver.tbody_y9udji$(HTMLRender$renderPerformanceDetails$lambda$lambda_0(closure$report, geoMeanChangeMap, this$HTMLRender, closure$onlyChanges));
      return Unit;
    };
  }
  HTMLRender.prototype.renderPerformanceDetails_0 = function ($receiver, report, onlyChanges) {
    if (onlyChanges) {
      if (report.regressions.isEmpty() && report.improvements.isEmpty()) {
        $receiver.div_g2x9wh$('alert alert-success', HTMLRender$renderPerformanceDetails$lambda);
      }
    }
    $receiver.table_i0l9qi$(HTMLRender$renderPerformanceDetails$lambda_0(report, this, onlyChanges));
  };
  function HTMLRender$Color(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  HTMLRender$Color.prototype.times_14dthe$ = function (coefficient) {
    return new HTMLRender$Color(this.red * coefficient, this.green * coefficient, this.blue * coefficient);
  };
  HTMLRender$Color.prototype.plus_u1gz2h$ = function (other) {
    return new HTMLRender$Color(this.red + other.red, this.green + other.green, this.blue + other.blue);
  };
  HTMLRender$Color.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    var tmp$;
    tmp$ = listOf([this.red, this.green, this.blue]).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.append_gw00v9$(padStart(toString_0(clamp(numberToInt(element * 255), 0, 255), 16), 2, 48));
    }
    return '#' + $receiver.toString();
  };
  HTMLRender$Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  HTMLRender$Color.prototype.component1 = function () {
    return this.red;
  };
  HTMLRender$Color.prototype.component2 = function () {
    return this.green;
  };
  HTMLRender$Color.prototype.component3 = function () {
    return this.blue;
  };
  HTMLRender$Color.prototype.copy_yvo9jy$ = function (red, green, blue) {
    return new HTMLRender$Color(red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue);
  };
  HTMLRender$Color.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    return result;
  };
  HTMLRender$Color.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue)))));
  };
  function HTMLRender$ColoredCell(scaledValue, reverse) {
    if (reverse === void 0)
      reverse = false;
    this.scaledValue = scaledValue;
    this.reverse = reverse;
    this.value = 0;
    this.neutralColor = new HTMLRender$Color(1.0, 1.0, 1.0);
    this.negativeColor = new HTMLRender$Color(0.0, 1.0, 0.0);
    this.positiveColor = new HTMLRender$Color(1.0, 0.0, 0.0);
    var tmp$;
    var x = this.scaledValue;
    if (Math_0.abs(x) <= 1.0)
      tmp$ = this.scaledValue;
    else {
      throw IllegalStateException_init('Value should be scaled in range [-1.0; 1.0]'.toString());
    }
    this.value = tmp$;
  }
  Object.defineProperty(HTMLRender$ColoredCell.prototype, 'backgroundStyle', {
    get: function () {
      return this.getColor().toString();
    }
  });
  HTMLRender$ColoredCell.prototype.getColor = function () {
    var currentValue = clamp(this.value, -1.0, 1.0);
    var cellValue = this.reverse ? -currentValue : currentValue;
    var baseColor = cellValue < 0 ? this.negativeColor : this.positiveColor;
    var $receiver = Math_0.abs(cellValue);
    var x = Math_0.pow($receiver, 0.477) * math.PI * 0.5;
    var color = Math_0.sin(x);
    return this.linearInterpolation_0(this.neutralColor, baseColor, color);
  };
  HTMLRender$ColoredCell.prototype.linearInterpolation_0 = function (a, b, coefficient) {
    var reversedCoefficient = 1.0 - coefficient;
    return a.times_14dthe$(reversedCoefficient).plus_u1gz2h$(b.times_14dthe$(coefficient));
  };
  HTMLRender$ColoredCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColoredCell',
    interfaces: []
  };
  HTMLRender.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HTMLRender',
    interfaces: [Render]
  };
  function Render() {
    Render$Companion_getInstance();
  }
  function Render$Companion() {
    Render$Companion_instance = this;
  }
  Render$Companion.prototype.getRenderByName_61zpoe$ = function (name) {
    switch (name) {
      case 'text':
        return new TextRender();
      case 'html':
        return new HTMLRender();
      case 'teamcity':
        return new TeamCityStatisticsRender();
      default:throw IllegalStateException_init(('Unknown render ' + name).toString());
    }
  };
  Render$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Render$Companion_instance = null;
  function Render$Companion_getInstance() {
    if (Render$Companion_instance === null) {
      new Render$Companion();
    }
    return Render$Companion_instance;
  }
  Render.prototype.render_n8b5gj$ = function (report, onlyChanges, callback$default) {
    if (onlyChanges === void 0)
      onlyChanges = false;
    return callback$default ? callback$default(report, onlyChanges) : this.render_n8b5gj$$default(report, onlyChanges);
  };
  Render.prototype.print_oi5d5c$ = function (report, onlyChanges, outputFile) {
    if (onlyChanges === void 0)
      onlyChanges = false;
    if (outputFile === void 0)
      outputFile = null;
    var tmp$;
    var content = this.render_n8b5gj$(report, onlyChanges);
    var tmp$_0;
    if (outputFile != null) {
      writeToFile(outputFile, content);
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    (tmp$ = tmp$_0) != null ? tmp$ : println(content);
  };
  Render.prototype.formatValue_8555vt$ = function (number, isPercent) {
    if (isPercent === void 0)
      isPercent = false;
    return isPercent ? format(number, 2) + '%' : format(number);
  };
  Render.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Render',
    interfaces: []
  };
  function TextRender() {
    Render.call(this);
    this.content_0 = StringBuilder_init();
    this.headerSeparator_0 = '=================';
    this.wideColumnWidth_0 = 50;
    this.standardColumnWidth_0 = 25;
  }
  Object.defineProperty(TextRender.prototype, 'name', {
    get: function () {
      return 'text';
    }
  });
  TextRender.prototype.append_0 = function (text) {
    if (text === void 0)
      text = '';
    this.content_0.append_gw00v9$(text + '\n');
  };
  TextRender.prototype.render_n8b5gj$$default = function (report, onlyChanges) {
    this.renderEnvChanges_51jguj$(report.envChanges, 'Environment');
    this.renderEnvChanges_51jguj$(report.kotlinChanges, 'Compiler');
    this.renderStatusSummary_i6hk0m$(report);
    this.renderStatusChangesDetails_p7pa7t$(report.getBenchmarksWithChangedStatus());
    this.renderPerformanceSummary_i6hk0m$(report);
    this.renderPerformanceDetails_n8b5gj$(report, onlyChanges);
    return this.content_0.toString();
  };
  TextRender.prototype.printBucketInfo_0 = function (bucket, name) {
    if (!bucket.isEmpty()) {
      this.append_0(name + ': ' + bucket.size);
    }
  };
  TextRender.prototype.printStatusChangeInfo_0 = function (bucket, name) {
    var tmp$;
    if (!bucket.isEmpty()) {
      this.append_0(name + ':');
      tmp$ = bucket.iterator();
      while (tmp$.hasNext()) {
        var change = tmp$.next();
        this.append_0(change.renderAsText());
      }
    }
  };
  TextRender.prototype.renderEnvChanges_51jguj$ = function (envChanges, bucketName) {
    if (!envChanges.isEmpty()) {
      this.append_0((new ChangeReport(bucketName, envChanges)).renderAsTextReport());
    }
  };
  TextRender.prototype.renderStatusChangesDetails_p7pa7t$ = function (benchmarksWithChangedStatus) {
    if (!benchmarksWithChangedStatus.isEmpty()) {
      this.append_0('Changes in status');
      this.append_0(this.headerSeparator_0);
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = benchmarksWithChangedStatus.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.current === BenchmarkResult$Status$FAILED_getInstance())
          destination.add_11rb$(element);
      }
      this.printStatusChangeInfo_0(destination, 'New failures');
      var destination_0 = ArrayList_init_0();
      var tmp$_0;
      tmp$_0 = benchmarksWithChangedStatus.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.current === BenchmarkResult$Status$PASSED_getInstance())
          destination_0.add_11rb$(element_0);
      }
      this.printStatusChangeInfo_0(destination_0, 'New passes');
      this.append_0();
    }
  };
  TextRender.prototype.renderStatusSummary_i6hk0m$ = function (report) {
    this.append_0('Status summary');
    this.append_0(this.headerSeparator_0);
    var failedBenchmarks = report.failedBenchmarks;
    var addedBenchmarks = report.addedBenchmarks;
    var removedBenchmarks = report.removedBenchmarks;
    if (failedBenchmarks.isEmpty()) {
      this.append_0('All benchmarks passed!');
    }
    if (!failedBenchmarks.isEmpty() || !addedBenchmarks.isEmpty() || !removedBenchmarks.isEmpty()) {
      this.printBucketInfo_0(failedBenchmarks, 'Failed benchmarks');
      this.printBucketInfo_0(addedBenchmarks, 'Added benchmarks');
      this.printBucketInfo_0(removedBenchmarks, 'Removed benchmarks');
    }
    this.append_0('Total becnhmarks number: ' + report.benchmarksNumber);
    this.append_0();
  };
  TextRender.prototype.renderPerformanceSummary_i6hk0m$ = function (report) {
    if (!report.regressions.isEmpty() || !report.improvements.isEmpty()) {
      this.append_0('Performance summary');
      this.append_0(this.headerSeparator_0);
      if (!report.regressions.isEmpty()) {
        this.append_0('Regressions: Maximum = ' + this.formatValue_8555vt$(report.maximumRegression, true) + ',' + (' Geometric mean = ' + this.formatValue_8555vt$(report.regressionsGeometricMean, true)));
      }
      if (!report.improvements.isEmpty()) {
        this.append_0('Improvements: Maximum = ' + this.formatValue_8555vt$(report.maximumImprovement, true) + ',' + (' Geometric mean = ' + this.formatValue_8555vt$(report.improvementsGeometricMean, true)));
      }
      this.append_0();
    }
  };
  TextRender.prototype.formatColumn_0 = function (content, isWide) {
    if (isWide === void 0)
      isWide = false;
    return padEnd(content, isWide ? this.wideColumnWidth_0 : this.standardColumnWidth_0, 32);
  };
  TextRender.prototype.printBenchmarksDetails_0 = function (fullSet, bucket) {
    if (bucket === void 0)
      bucket = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (bucket != null) {
      tmp$ = bucket.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_5 = tmp$.next();
        var name = tmp$_5.key;
        var change = tmp$_5.value;
        this.append_0(this.formatColumn_0(name, true) + this.formatColumn_0(toString(getValue(fullSet, name).first)) + this.formatColumn_0(toString(getValue(fullSet, name).second)) + this.formatColumn_0(change.first.toString() + ' %') + this.formatColumn_0(change.second.toString()));
      }
    }
     else {
      var placeholder = '-';
      tmp$_0 = fullSet.entries.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_6 = tmp$_0.next();
        var name_0 = tmp$_6.key;
        var value = tmp$_6.value;
        this.append_0(this.formatColumn_0(name_0, true) + this.formatColumn_0((tmp$_2 = (tmp$_1 = value.first) != null ? tmp$_1.toString() : null) != null ? tmp$_2 : placeholder) + this.formatColumn_0((tmp$_4 = (tmp$_3 = value.second) != null ? tmp$_3.toString() : null) != null ? tmp$_4 : placeholder) + this.formatColumn_0(placeholder) + this.formatColumn_0(placeholder));
      }
    }
  };
  TextRender.prototype.printTableLineSeparator_0 = function (tableWidth) {
    this.append_0(padEnd('-', tableWidth, 45));
  };
  TextRender.prototype.printPerformanceTableHeader_0 = function () {
    var wideColumns = listOf_0(this.formatColumn_0('Benchmark', true));
    var standardColumns = listOf([this.formatColumn_0('First score'), this.formatColumn_0('Second score'), this.formatColumn_0('Percent'), this.formatColumn_0('Ratio')]);
    var tableWidth = Kotlin.imul(this.wideColumnWidth_0, wideColumns.size) + Kotlin.imul(this.standardColumnWidth_0, standardColumns.size) | 0;
    this.append_0(joinToString(wideColumns, '') + joinToString(standardColumns, ''));
    this.printTableLineSeparator_0(tableWidth);
    return tableWidth;
  };
  TextRender.prototype.renderPerformanceDetails_n8b5gj$ = function (report, onlyChanges) {
    if (onlyChanges === void 0)
      onlyChanges = false;
    this.append_0('Performance details');
    this.append_0(this.headerSeparator_0);
    if (onlyChanges) {
      if (report.regressions.isEmpty() && report.improvements.isEmpty()) {
        this.append_0('All becnhmarks are stable.');
      }
    }
    var tableWidth = this.printPerformanceTableHeader_0();
    var geoMeanChangeMap = report.geoMeanScoreChange != null ? mapOf(to(ensureNotNull(report.geoMeanBenchmark.first).meanBenchmark.name, ensureNotNull(report.geoMeanScoreChange))) : null;
    this.printBenchmarksDetails_0(mutableMapOf([to(ensureNotNull(report.geoMeanBenchmark.first).meanBenchmark.name, report.geoMeanBenchmark)]), geoMeanChangeMap);
    this.printTableLineSeparator_0(tableWidth);
    this.printBenchmarksDetails_0(report.mergedReport, report.regressions);
    this.printBenchmarksDetails_0(report.mergedReport, report.improvements);
    if (!onlyChanges) {
      var $receiver = report.mergedReport;
      var destination = LinkedHashMap_init();
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!report.regressions.keys.contains_11rb$(element.key) && !report.improvements.keys.contains_11rb$(element.key)) {
          destination.put_xwzc9p$(element.key, element.value);
        }
      }
      this.printBenchmarksDetails_0(destination);
    }
  };
  TextRender.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextRender',
    interfaces: [Render]
  };
  function TeamCityStatisticsRender() {
    Render.call(this);
    this.content_0 = StringBuilder_init();
  }
  Object.defineProperty(TeamCityStatisticsRender.prototype, 'name', {
    get: function () {
      return 'teamcity';
    }
  });
  TeamCityStatisticsRender.prototype.render_n8b5gj$$default = function (report, onlyChanges) {
    var currentDurations = report.currentBenchmarksDuration;
    this.content_0.append_gw00v9$("##teamcity[testSuiteStarted name='Benchmarks']\n");
    var tmp$;
    tmp$ = report.currentMeanVarianceBenchmarks.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.renderBenchmark_0(element.meanBenchmark, ensureNotNull(currentDurations.get_11rb$(element.meanBenchmark.name)));
      this.renderSummaryBecnhmarkValue_0(element.meanBenchmark, 'Mean');
      this.renderSummaryBecnhmarkValue_0(element.varianceBenchmark, 'Variance');
    }
    this.content_0.append_gw00v9$("##teamcity[testSuiteFinished name='Benchmarks']\n");
    this.renderGeometricMean_0(ensureNotNull(report.geoMeanBenchmark.first));
    return this.content_0.toString();
  };
  TeamCityStatisticsRender.prototype.renderSummaryBecnhmarkValue_0 = function (benchmark, metric) {
    return this.content_0.append_gw00v9$("##teamcity[testMetadata testName='" + benchmark.name + "' name='" + metric + "'" + (" type='number' value='" + benchmark.score + "']" + '\n'));
  };
  TeamCityStatisticsRender.prototype.renderBenchmark_0 = function (benchmark, duration) {
    this.content_0.append_gw00v9$("##teamcity[testStarted name='" + benchmark.name + "']" + '\n');
    if (benchmark.status === BenchmarkResult$Status$FAILED_getInstance()) {
      this.content_0.append_gw00v9$("##teamcity[testFailed name='" + benchmark.name + "']" + '\n');
    }
    this.content_0.append_gw00v9$("##teamcity[testFinished name='" + benchmark.name + "' duration='" + numberToInt(duration / 1000) + "']" + '\n');
  };
  TeamCityStatisticsRender.prototype.renderGeometricMean_0 = function (geoMeanBenchmark) {
    this.content_0.append_gw00v9$("##teamcity[buildStatisticValue key='Geometric mean' value='" + geoMeanBenchmark.meanBenchmark.score + "']" + '\n');
    this.content_0.append_gw00v9$("##teamcity[buildStatisticValue key='Geometric mean variance' value='" + geoMeanBenchmark.varianceBenchmark.score + "']" + '\n');
  };
  TeamCityStatisticsRender.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TeamCityStatisticsRender',
    interfaces: [Render]
  };
  var package$org = _.org || (_.org = {});
  var package$jetbrains = package$org.jetbrains || (package$org.jetbrains = {});
  var package$report = package$jetbrains.report || (package$jetbrains.report = {});
  package$report.JsonSerializable = JsonSerializable;
  package$report.EntityFromJsonFactory = EntityFromJsonFactory;
  Object.defineProperty(BenchmarksReport, 'Companion', {
    get: BenchmarksReport$Companion_getInstance
  });
  package$report.BenchmarksReport = BenchmarksReport;
  Object.defineProperty(Compiler$BackendType, 'JVM', {
    get: Compiler$BackendType$JVM_getInstance
  });
  Object.defineProperty(Compiler$BackendType, 'NATIVE', {
    get: Compiler$BackendType$NATIVE_getInstance
  });
  Compiler.BackendType = Compiler$BackendType;
  Object.defineProperty(Compiler, 'Companion', {
    get: Compiler$Companion_getInstance
  });
  Object.defineProperty(Compiler$Backend, 'Companion', {
    get: Compiler$Backend$Companion_getInstance
  });
  Compiler.Backend = Compiler$Backend;
  package$report.Compiler = Compiler;
  Object.defineProperty(Environment, 'Companion', {
    get: Environment$Companion_getInstance
  });
  Object.defineProperty(Environment$Machine, 'Companion', {
    get: Environment$Machine$Companion_getInstance
  });
  Environment.Machine = Environment$Machine;
  Object.defineProperty(Environment$JDKInstance, 'Companion', {
    get: Environment$JDKInstance$Companion_getInstance
  });
  Environment.JDKInstance = Environment$JDKInstance;
  package$report.Environment = Environment;
  Object.defineProperty(BenchmarkResult, 'Companion', {
    get: BenchmarkResult$Companion_getInstance
  });
  Object.defineProperty(BenchmarkResult$Status, 'PASSED', {
    get: BenchmarkResult$Status$PASSED_getInstance
  });
  Object.defineProperty(BenchmarkResult$Status, 'FAILED', {
    get: BenchmarkResult$Status$FAILED_getInstance
  });
  BenchmarkResult.Status = BenchmarkResult$Status;
  package$report.BenchmarkResult_init_io5o9c$ = BenchmarkResult_init;
  package$report.BenchmarkResult = BenchmarkResult;
  var package$json = package$report.json || (package$report.json = {});
  package$json.ConvertedFromJson = ConvertedFromJson;
  package$json.getRequiredField_cfpumc$ = getRequiredField;
  package$json.getOptionalField_cfpumc$ = getOptionalField;
  package$json.JsonElement = JsonElement;
  package$json.JsonPrimitive = JsonPrimitive;
  package$json.JsonLiteral_init_3p81yu$ = JsonLiteral_init;
  package$json.JsonLiteral_init_6taknv$ = JsonLiteral_init_0;
  package$json.JsonLiteral_init_61zpoe$ = JsonLiteral_init_1;
  package$json.JsonLiteral = JsonLiteral;
  Object.defineProperty(package$json, 'JsonNull', {
    get: JsonNull_getInstance
  });
  package$json.unexpectedJson_puj7f4$ = unexpectedJson;
  package$json.JsonObject = JsonObject;
  package$json.JsonArray = JsonArray;
  package$json.JsonInvalidValueInStrictModeException_init_mx4ult$ = JsonInvalidValueInStrictModeException_init;
  package$json.JsonInvalidValueInStrictModeException_init_14dthe$ = JsonInvalidValueInStrictModeException_init_0;
  package$json.JsonInvalidValueInStrictModeException = JsonInvalidValueInStrictModeException;
  package$json.JsonUnknownKeyException = JsonUnknownKeyException;
  package$json.JsonParsingException = JsonParsingException;
  package$json.JsonElementTypeMismatchException = JsonElementTypeMismatchException;
  Object.defineProperty(package$json, 'NULL_8be2vx$', {
    get: function () {
      return NULL;
    }
  });
  Object.defineProperty(package$json, 'COMMA_8be2vx$', {
    get: function () {
      return COMMA;
    }
  });
  Object.defineProperty(package$json, 'COLON_8be2vx$', {
    get: function () {
      return COLON;
    }
  });
  Object.defineProperty(package$json, 'BEGIN_OBJ_8be2vx$', {
    get: function () {
      return BEGIN_OBJ;
    }
  });
  Object.defineProperty(package$json, 'END_OBJ_8be2vx$', {
    get: function () {
      return END_OBJ;
    }
  });
  Object.defineProperty(package$json, 'BEGIN_LIST_8be2vx$', {
    get: function () {
      return BEGIN_LIST;
    }
  });
  Object.defineProperty(package$json, 'END_LIST_8be2vx$', {
    get: function () {
      return END_LIST;
    }
  });
  Object.defineProperty(package$json, 'STRING_8be2vx$', {
    get: function () {
      return STRING;
    }
  });
  Object.defineProperty(package$json, 'STRING_ESC_8be2vx$', {
    get: function () {
      return STRING_ESC;
    }
  });
  Object.defineProperty(package$json, 'INVALID_8be2vx$', {
    get: function () {
      return INVALID;
    }
  });
  Object.defineProperty(package$json, 'UNICODE_ESC_8be2vx$', {
    get: function () {
      return UNICODE_ESC;
    }
  });
  Object.defineProperty(package$json, 'TC_OTHER_8be2vx$', {
    get: function () {
      return TC_OTHER;
    }
  });
  Object.defineProperty(package$json, 'TC_STRING_8be2vx$', {
    get: function () {
      return TC_STRING;
    }
  });
  Object.defineProperty(package$json, 'TC_STRING_ESC_8be2vx$', {
    get: function () {
      return TC_STRING_ESC;
    }
  });
  Object.defineProperty(package$json, 'TC_WS_8be2vx$', {
    get: function () {
      return TC_WS;
    }
  });
  Object.defineProperty(package$json, 'TC_COMMA_8be2vx$', {
    get: function () {
      return TC_COMMA;
    }
  });
  Object.defineProperty(package$json, 'TC_COLON_8be2vx$', {
    get: function () {
      return TC_COLON;
    }
  });
  Object.defineProperty(package$json, 'TC_BEGIN_OBJ_8be2vx$', {
    get: function () {
      return TC_BEGIN_OBJ;
    }
  });
  Object.defineProperty(package$json, 'TC_END_OBJ_8be2vx$', {
    get: function () {
      return TC_END_OBJ;
    }
  });
  Object.defineProperty(package$json, 'TC_BEGIN_LIST_8be2vx$', {
    get: function () {
      return TC_BEGIN_LIST;
    }
  });
  Object.defineProperty(package$json, 'TC_END_LIST_8be2vx$', {
    get: function () {
      return TC_END_LIST;
    }
  });
  Object.defineProperty(package$json, 'TC_NULL_8be2vx$', {
    get: function () {
      return TC_NULL;
    }
  });
  Object.defineProperty(package$json, 'TC_INVALID_8be2vx$', {
    get: function () {
      return TC_INVALID;
    }
  });
  Object.defineProperty(package$json, 'TC_EOF_8be2vx$', {
    get: function () {
      return TC_EOF;
    }
  });
  Object.defineProperty(package$json, 'C2TC_8be2vx$', {
    get: function () {
      return C2TC;
    }
  });
  Object.defineProperty(package$json, 'EscapeCharMappings', {
    get: EscapeCharMappings_getInstance
  });
  package$json.charToTokenClass_8e8zqy$ = charToTokenClass;
  package$json.escapeToChar_kcn2v3$ = escapeToChar;
  $$importsForInline$$.benchmarksAnalyzer = _;
  package$json.fail_f0n09d$ = fail;
  package$json.Parser = Parser;
  package$json.require_wqn2ds$ = require_0;
  Object.defineProperty(JsonTreeParser, 'Companion', {
    get: JsonTreeParser$Companion_getInstance
  });
  package$json.JsonTreeParser_init_61zpoe$ = JsonTreeParser_init;
  package$json.JsonTreeParser = JsonTreeParser;
  package$json.printQuoted_jigvc$ = printQuoted;
  package$json.toBooleanStrict_pdl1vz$ = toBooleanStrict;
  package$json.toBooleanStrictOrNull_pdl1vz$ = toBooleanStrictOrNull;
  var package$analyzer = package$jetbrains.analyzer || (package$jetbrains.analyzer = {});
  package$analyzer.readFile_61zpoe$ = readFile;
  package$analyzer.format_j6vyb1$ = format;
  package$analyzer.writeToFile_puj7f4$ = writeToFile;
  package$analyzer.assert_4ina18$ = assert;
  package$analyzer.sendGetRequest_pjbw2f$ = sendGetRequest;
  _.Connector = Connector;
  Object.defineProperty(_, 'BintrayConnector', {
    get: BintrayConnector_getInstance
  });
  Object.defineProperty(_, 'TeamCityConnector', {
    get: TeamCityConnector_getInstance
  });
  _.getFileContent_jyasbz$ = getFileContent;
  _.main_kand9s$ = main;
  package$analyzer.ChangeReport = ChangeReport;
  Object.defineProperty(FieldChange, 'Companion', {
    get: FieldChange$Companion_getInstance
  });
  package$analyzer.FieldChange = FieldChange;
  package$analyzer.MeanVariance = MeanVariance;
  package$analyzer.MeanVarianceBenchmark = MeanVarianceBenchmark;
  package$analyzer.geometricMean_d3e2cz$ = geometricMean;
  package$analyzer.computeMeanVariance_d3e2cz$ = computeMeanVariance;
  package$analyzer.collectMeanResults_g5x25a$ = collectMeanResults;
  package$analyzer.collectBenchmarksDurations_g5x25a$ = collectBenchmarksDurations;
  package$analyzer.SummaryBenchmarksReport = SummaryBenchmarksReport;
  ArgType.Boolean = ArgType$Boolean;
  ArgType.String = ArgType$String;
  ArgType.Int = ArgType$Int;
  ArgType.Double = ArgType$Double;
  ArgType.Choice = ArgType$Choice;
  var package$kliopt = package$jetbrains.kliopt || (package$jetbrains.kliopt = {});
  package$kliopt.ArgType = ArgType;
  package$kliopt.Descriptor = Descriptor;
  package$kliopt.OptionDescriptor = OptionDescriptor;
  package$kliopt.ArgDescriptor = ArgDescriptor;
  ArgParser.ParsedArg = ArgParser$ParsedArg;
  package$kliopt.ArgParser = ArgParser;
  var package$renders = package$jetbrains.renders || (package$jetbrains.renders = {});
  package$renders.Natural = Natural;
  package$renders.Element = Element;
  package$renders.TextElement = TextElement;
  package$renders.HtmlTagMarker = HtmlTagMarker;
  package$renders.Tag = Tag;
  package$renders.TagWithText = TagWithText;
  package$renders.HTML = HTML;
  package$renders.Head = Head;
  package$renders.Title = Title;
  package$renders.Link = Link;
  package$renders.Script = Script;
  package$renders.BodyTag = BodyTag;
  package$renders.BodyTagWithClass = BodyTagWithClass;
  package$renders.Body = Body;
  package$renders.B = B;
  package$renders.P = P;
  package$renders.H1 = H1;
  package$renders.H2 = H2;
  package$renders.H4 = H4;
  package$renders.HR = HR;
  package$renders.Div = Div;
  package$renders.Header = Header;
  package$renders.Button = Button;
  package$renders.Span = Span;
  package$renders.A = A;
  package$renders.Image = Image;
  package$renders.TableTag = TableTag;
  package$renders.TableBlock = TableBlock;
  package$renders.Table = Table;
  package$renders.THead = THead;
  package$renders.TFoot = TFoot;
  package$renders.TBody = TBody;
  package$renders.TableRowTag = TableRowTag;
  package$renders.TableRow = TableRow;
  package$renders.TableHeadInfo = TableHeadInfo;
  package$renders.TableDataInfo = TableDataInfo;
  package$renders.html_jz366x$ = html;
  HTMLRender.Color = HTMLRender$Color;
  HTMLRender.ColoredCell = HTMLRender$ColoredCell;
  package$renders.HTMLRender = HTMLRender;
  Object.defineProperty(Render, 'Companion', {
    get: Render$Companion_getInstance
  });
  package$renders.Render = Render;
  package$renders.TextRender = TextRender;
  package$renders.TeamCityStatisticsRender = TeamCityStatisticsRender;
  EntityFromJsonFactory.prototype.elementToDouble_4kkq6g$ = ConvertedFromJson.prototype.elementToDouble_4kkq6g$;
  EntityFromJsonFactory.prototype.elementToInt_4kkq6g$ = ConvertedFromJson.prototype.elementToInt_4kkq6g$;
  EntityFromJsonFactory.prototype.elementToString_4kkq6g$ = ConvertedFromJson.prototype.elementToString_4kkq6g$;
  BenchmarksReport$Companion.prototype.elementToDouble_4kkq6g$ = EntityFromJsonFactory.prototype.elementToDouble_4kkq6g$;
  BenchmarksReport$Companion.prototype.elementToInt_4kkq6g$ = EntityFromJsonFactory.prototype.elementToInt_4kkq6g$;
  BenchmarksReport$Companion.prototype.elementToString_4kkq6g$ = EntityFromJsonFactory.prototype.elementToString_4kkq6g$;
  BenchmarksReport.prototype.arrayToJson_yl67zr$ = JsonSerializable.prototype.arrayToJson_yl67zr$;
  Compiler$Companion.prototype.elementToDouble_4kkq6g$ = EntityFromJsonFactory.prototype.elementToDouble_4kkq6g$;
  Compiler$Companion.prototype.elementToInt_4kkq6g$ = EntityFromJsonFactory.prototype.elementToInt_4kkq6g$;
  Compiler$Companion.prototype.elementToString_4kkq6g$ = EntityFromJsonFactory.prototype.elementToString_4kkq6g$;
  Compiler$Backend$Companion.prototype.elementToDouble_4kkq6g$ = EntityFromJsonFactory.prototype.elementToDouble_4kkq6g$;
  Compiler$Backend$Companion.prototype.elementToInt_4kkq6g$ = EntityFromJsonFactory.prototype.elementToInt_4kkq6g$;
  Compiler$Backend$Companion.prototype.elementToString_4kkq6g$ = EntityFromJsonFactory.prototype.elementToString_4kkq6g$;
  Compiler$Backend.prototype.arrayToJson_yl67zr$ = JsonSerializable.prototype.arrayToJson_yl67zr$;
  Compiler.prototype.arrayToJson_yl67zr$ = JsonSerializable.prototype.arrayToJson_yl67zr$;
  Environment$Companion.prototype.elementToDouble_4kkq6g$ = EntityFromJsonFactory.prototype.elementToDouble_4kkq6g$;
  Environment$Companion.prototype.elementToInt_4kkq6g$ = EntityFromJsonFactory.prototype.elementToInt_4kkq6g$;
  Environment$Companion.prototype.elementToString_4kkq6g$ = EntityFromJsonFactory.prototype.elementToString_4kkq6g$;
  Environment$Machine$Companion.prototype.elementToDouble_4kkq6g$ = EntityFromJsonFactory.prototype.elementToDouble_4kkq6g$;
  Environment$Machine$Companion.prototype.elementToInt_4kkq6g$ = EntityFromJsonFactory.prototype.elementToInt_4kkq6g$;
  Environment$Machine$Companion.prototype.elementToString_4kkq6g$ = EntityFromJsonFactory.prototype.elementToString_4kkq6g$;
  Environment$Machine.prototype.arrayToJson_yl67zr$ = JsonSerializable.prototype.arrayToJson_yl67zr$;
  Environment$JDKInstance$Companion.prototype.elementToDouble_4kkq6g$ = EntityFromJsonFactory.prototype.elementToDouble_4kkq6g$;
  Environment$JDKInstance$Companion.prototype.elementToInt_4kkq6g$ = EntityFromJsonFactory.prototype.elementToInt_4kkq6g$;
  Environment$JDKInstance$Companion.prototype.elementToString_4kkq6g$ = EntityFromJsonFactory.prototype.elementToString_4kkq6g$;
  Environment$JDKInstance.prototype.arrayToJson_yl67zr$ = JsonSerializable.prototype.arrayToJson_yl67zr$;
  Environment.prototype.arrayToJson_yl67zr$ = JsonSerializable.prototype.arrayToJson_yl67zr$;
  BenchmarkResult$Companion.prototype.elementToDouble_4kkq6g$ = EntityFromJsonFactory.prototype.elementToDouble_4kkq6g$;
  BenchmarkResult$Companion.prototype.elementToInt_4kkq6g$ = EntityFromJsonFactory.prototype.elementToInt_4kkq6g$;
  BenchmarkResult$Companion.prototype.elementToString_4kkq6g$ = EntityFromJsonFactory.prototype.elementToString_4kkq6g$;
  BenchmarkResult.prototype.arrayToJson_yl67zr$ = JsonSerializable.prototype.arrayToJson_yl67zr$;
  NULL = 'null';
  COMMA = 44;
  COLON = 58;
  BEGIN_OBJ = 123;
  END_OBJ = 125;
  BEGIN_LIST = 91;
  END_LIST = 93;
  STRING = 34;
  STRING_ESC = 92;
  INVALID = toChar(0);
  UNICODE_ESC = 117;
  TC_OTHER = 0;
  TC_STRING = 1;
  TC_STRING_ESC = 2;
  TC_WS = 3;
  TC_COMMA = 4;
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_NULL = 10;
  TC_INVALID = 11;
  TC_EOF = 12;
  CTC_MAX = 126;
  C2ESC_MAX = 93;
  ESC2C_MAX = 117;
  var $receiver = new Int8Array(126);
  for (var i = 0; i <= 32; i++)
    initC2TC($receiver, i, TC_INVALID);
  initC2TC($receiver, 9, TC_WS);
  initC2TC($receiver, 10, TC_WS);
  initC2TC($receiver, 13, TC_WS);
  initC2TC($receiver, 32, TC_WS);
  initC2TC_0($receiver, COMMA, TC_COMMA);
  initC2TC_0($receiver, COLON, TC_COLON);
  initC2TC_0($receiver, BEGIN_OBJ, TC_BEGIN_OBJ);
  initC2TC_0($receiver, END_OBJ, TC_END_OBJ);
  initC2TC_0($receiver, BEGIN_LIST, TC_BEGIN_LIST);
  initC2TC_0($receiver, END_LIST, TC_END_LIST);
  initC2TC_0($receiver, STRING, TC_STRING);
  initC2TC_0($receiver, STRING_ESC, TC_STRING_ESC);
  C2TC = $receiver;
  var $receiver_0 = Kotlin.newArray(128, null);
  for (var c = 0; c <= 31; c++) {
    var c1 = toHexChar(c >> 12);
    var c2 = toHexChar(c >> 8);
    var c3 = toHexChar(c >> 4);
    var c4 = toHexChar(c);
    $receiver_0[c] = '\\' + 'u' + String.fromCharCode(c1) + String.fromCharCode(c2) + String.fromCharCode(c3) + String.fromCharCode(c4);
  }
  $receiver_0[34] = '\\"';
  $receiver_0[92] = '\\\\';
  $receiver_0[9] = '\\t';
  $receiver_0[8] = '\\b';
  $receiver_0[10] = '\\n';
  $receiver_0[13] = '\\r';
  $receiver_0[12] = '\\f';
  ESCAPE_CHARS = $receiver_0;
  Kotlin.defineModule('benchmarksAnalyzer', _);
  return _;
}(typeof benchmarksAnalyzer === 'undefined' ? {} : benchmarksAnalyzer, kotlin);
