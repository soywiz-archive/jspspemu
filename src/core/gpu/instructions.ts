﻿export enum GpuOpCodes {
	NOP = 0x00, VADDR = 0x01, IADDR = 0x02, Unknown0x03 = 0x03,
	PRIM = 0x04, BEZIER = 0x05, SPLINE = 0x06, BBOX = 0x07,
	JUMP = 0x08, BJUMP = 0x09, CALL = 0x0A, RET = 0x0B,
	END = 0x0C, Unknown0x0D = 0x0D, SIGNAL = 0x0E, FINISH = 0x0F,
	BASE = 0x10, Unknown0x11 = 0x11, VTYPE = 0x12, OFFSET_ADDR = 0x13,
	ORIGIN_ADDR = 0x14, REGION1 = 0x15, REGION2 = 0x16, LTE = 0x17,
	LTE0 = 0x18, LTE1 = 0x19, LTE2 = 0x1A, LTE3 = 0x1B,
	CPE = 0x1C, BCE = 0x1D, TME = 0x1E, FGE = 0x1F,
	DTE = 0x20, ABE = 0x21, ATE = 0x22, ZTE = 0x23,
	STE = 0x24, AAE = 0x25, PCE = 0x26, CTE = 0x27,
	LOE = 0x28, Unknown0x29 = 0x29, BONE_START = 0x2A, BONE_PUT = 0x2B,
	MW0 = 0x2C, MW1 = 0x2D, MW2 = 0x2E, MW3 = 0x2F,
	MW4 = 0x30, MW5 = 0x31, MW6 = 0x32, MW7 = 0x33,
	Unknown0x34 = 0x34, Unknown0x35 = 0x35, PSUB = 0x36, PPRIM = 0x37,
	PFACE = 0x38, Unknown0x39 = 0x39, WORLD_START = 0x3A, WORLD_PUT = 0x3B,
	VIEW_START = 0x3C, VIEW_PUT = 0x3D, PROJ_START = 0x3E, PROJ_PUT = 0x3F,
	TMS = 0x40, TMATRIX = 0x41, XSCALE = 0x42, YSCALE = 0x43,
	ZSCALE = 0x44, XPOS = 0x45, YPOS = 0x46, ZPOS = 0x47,
	USCALE = 0x48, VSCALE = 0x49, UOFFSET = 0x4A, VOFFSET = 0x4B,
	OFFSETX = 0x4C, OFFSETY = 0x4D, Unknown0x4E = 0x4E, Unknown0x4F = 0x4F,
	SHADE = 0x50, RNORM = 0x51, Unknown0x52 = 0x52, CMAT = 0x53,
	EMC = 0x54, AMC = 0x55, DMC = 0x56, SMC = 0x57,
	AMA = 0x58, Unknown0x59 = 0x59, Unknown0x5A = 0x5A, SPOW = 0x5B,
	ALC = 0x5C, ALA = 0x5D, LMODE = 0x5E, LT0 = 0x5F,
	LT1 = 0x60, LT2 = 0x61, LT3 = 0x62, LXP0 = 0x63,
	LYP0 = 0x64, LZP0 = 0x65, LXP1 = 0x66, LYP1 = 0x67,
	LZP1 = 0x68, LXP2 = 0x69, LYP2 = 0x6A, LZP2 = 0x6B,
	LXP3 = 0x6C, LYP3 = 0x6D, LZP3 = 0x6E, LXD0 = 0x6F,
	LYD0, LZD0, LXD1, LYD1,
	LZD1, LXD2, LYD2, LZD2,
	LXD3, LYD3, LZD3, LCA0,
	LLA0, LQA0, LCA1, LLA1,
	LQA1, LCA2, LLA2, LQA2,
	LCA3, LLA3, LQA3, SPOTEXP0,
	SPOTEXP1, SPOTEXP2, SPOTEXP3, SPOTCUT0,
	SPOTCUT1, SPOTCUT2, SPOTCUT3, ALC0,
	DLC0, SLC0, ALC1, DLC1,
	SLC1, ALC2, DLC2, SLC2,
	ALC3, DLC3, SLC3, FFACE,
	FBP, FBW, ZBP, ZBW,
	TBP0, TBP1, TBP2, TBP3,
	TBP4, TBP5, TBP6, TBP7,
	TBW0, TBW1, TBW2, TBW3,
	TBW4, TBW5, TBW6, TBW7,
	CBP, CBPH, TRXSBP, TRXSBW,
	TRXDBP, TRXDBW, Unknown0xB6, Unknown0xB7,
	TSIZE0, TSIZE1, TSIZE2, TSIZE3,
	TSIZE4, TSIZE5, TSIZE6, TSIZE7,
	TMAP, TEXTURE_ENV_MAP_MATRIX, TMODE, TPSM,
	CLOAD, CMODE, TFLT, TWRAP,
	TBIAS, TFUNC, TEC, TFLUSH,
	TSYNC, FFAR, FDIST, FCOL,
	TSLOPE, Unknown0xD1, PSM, CLEAR,
	SCISSOR1, SCISSOR2, NEARZ, FARZ,
	CTST, CREF, CMSK, ATST,
	STST, SOP, ZTST, ALPHA,
	SFIX, DFIX, DTH0, DTH1,
	DTH2, DTH3, LOP, ZMSK,
	PMSKC, PMSKA, TRXKICK, TRXSPOS,
	TRXDPOS, Unknown0xED, TRXSIZE, Unknown0xEF,
	Unknown0xF0, Unknown0xF1, Unknown0xF2, Unknown0xF3,
	Unknown0xF4, Unknown0xF5, Unknown0xF6, Unknown0xF7,
	Unknown0xF8, Unknown0xF9, Unknown0xFA, Unknown0xFB,
	Unknown0xFC, Unknown0xFD, Unknown0xFE, Dummy,
}
