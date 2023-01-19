import argparse
from argparse import Namespace

# I/O arguments
ref: str = ''
tgt: str = ''

arg1 = Namespace(input_dir='input/face', output_dir='output', im_path1=ref, im_path2='15.png', im_path3= im_path2,
 sign='realistic', smooth=5, size=1024, ckpt='pretrained_models/ffhq.pt', channel_multiplier=2,
  latent=512, n_mlp=8, device='cuda', seed=None, tile_latent=False, opt_name='adam',
   learning_rate=0.01, lr_schedule='fixed', save_intermediate=False, save_interval=300,
    verbose=False, seg_ckpt='pretrained_models/seg.pth', percept_lambda=1.0, l2_lambda=1.0,
     p_norm_lambda=0.001, l_F_lambda=0.1, W_steps=1100, FS_steps=250, ce_lambda=1.0, style_lambda=40000.0,
      align_steps1=140, align_steps2=100, face_lambda=1.0, hair_lambda=1.0, blend_steps=400)

print(arg1)